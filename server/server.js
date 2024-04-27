const express= require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const app = express()

app.use(cors())

//==== Connect database ===/
connectDB()

app.get("/" , (req , res)=>{
    res.send("hii welcome to server")
 })

let Port = process.env.PORT;

app.listen(Port , ()=>{
    console.log(`server running on ${Port}`)
})