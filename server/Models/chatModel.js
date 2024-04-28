const mongoose = require("mongoose")


const messageSchema = new mongoose.Schema({
  user : {
    type : String,
    
  }
})

const chatModel = mongoose.model("chats" , messageSchema)

module.exports= chatModel;