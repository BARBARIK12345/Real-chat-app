const express= require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const app = express()

app.use(cors())

//==== Connect database ===/
connectDB()

app.get("/" , (req , res)=>{
    res.send("hii welcome to server")
 })

let Port = 7000;

app.listen(Port , ()=>{
    console.log(`server running on ${Port}`)
})