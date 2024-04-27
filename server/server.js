const express= require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const cookieParser = require("cookie-parser")
const app = express()

app.use(cors())

//==== Connect database ===/
connectDB()

// app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())


app.get("/" , (req , res)=>{
    res.send("hii welcome to server")
 })

// app.use("/api/" , ) 


let Port = process.env.PORT;

app.listen(Port , ()=>{
    console.log(`server running on ${Port}`)
})