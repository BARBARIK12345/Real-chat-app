const express= require("express")
const cors = require("cors")
const { Server } = require( "socket.io");
const {createServer} = require("http");
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const multer = require("multer")
const cookieParser = require("cookie-parser")
const CryptoJS = require("crypto-js")

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

//==Multer uplaod backend

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage });


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
io.on('connection',  (socket) => {
    console.log('A user connected' , socket.id);

    //Decrypt message
      socket.on('sendMessage', (encryptedMessage) => {
        const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, 'secret key').toString(CryptoJS.enc.Utf8);
        socket.emit('message', decryptedMessage);
      });
  
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

    //Image uplaod
    socket.on('sendImage', upload.single('image'), (formData) => {
        
      });
  });

let Port = process.env.PORT;

server.listen(Port , ()=>{
    console.log(`server running on ${Port}`)
})