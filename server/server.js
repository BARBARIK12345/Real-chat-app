const express= require("express")
const cors = require("cors")
const { Server } = require( "socket.io");
const {createServer} = require("http");
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser")


const app = express()
app.use(cors())
const server = createServer(app);                  /// creating new server inside server hence we used server at instance of app.listening

const io = new Server(server , {                 /// io cicuit created on "server hence we use server instead of app"
    cors : {
        origin : "http://localhost:3000",
        methods : ["GET" , "POST"],
        credentials : true ,
    }
});

//==== Connect database ===/
connectDB()

// app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())


app.get("/" , (req , res)=>{
    res.send("hii welcome to server")
 })

app.use("/api/user" , require("./Routes/userRoutes") ) 


// Socket.io logic
io.on('connection', (socket) => {
    console.log('A user connected' , socket.id);
  
    // Handle new message
    socket.on('newMessage', ({room , message}) => {
      console.log('New message:', message);
      // Broadcast the message to all connected clients
    //   io.emit('recieved-message', message);
       socket.to(room).emit("recieved-message", message)
    });
  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`User disconnected, ${socket.id}`);
    });
  });

let Port = process.env.PORT;

server.listen(Port , ()=>{
    console.log(`server running on ${Port}`)
})