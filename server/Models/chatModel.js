const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reciever: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date,
    default: Date.now 
   },
});

const chatModel = mongoose.model("chats", messageSchema);

module.exports = chatModel;
