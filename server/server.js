const express= require("express")
const cors = require("cors")
const http = require('http')
const socketIo = require("socket.io")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser")


const app = express()
const server = http.createServer(app);
const io = socketIo(server)
app.use(cors())

//==== Connect database ===/
connectDB()

// app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())


app.get("/" , (req , res)=>{
    res.send("hii welcome to server")
 })

app.use("/api/user" , require("./Routes/userRoutes") ) 

// Socket.io integration
io.on('connection', (socket) => {
    console.log('New client connected', socket.id);
    
    // Handle incoming messages
    socket.on('message', (data) => {
      console.log('Message received:', data);
      // Broadcast the message to all connected clients
      io.emit('message', data);
    });
    socket.on('message', (data) => {
     io.emit("recieved-message" , data) 
    });  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('Client disconnected' , socket.id);
    });
})

let Port = process.env.PORT;

app.listen(Port , ()=>{
    console.log(`server running on ${Port}`)
})