const express= require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/" , (req , res)=>{
    res.send("hii welcome to server")
 })

let Port = 7000;

app.listen(Port , ()=>{
    console.log(`server running on ${Port}`)
})