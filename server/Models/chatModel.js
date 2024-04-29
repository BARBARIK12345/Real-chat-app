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
  // Time: { 
  //   type: Date,
  //   default: Date.now 
  //  },
},
{
  timestamps: true // Add timestamps to the schema
});

const chatModel = mongoose.model("chats", messageSchema);

module.exports = chatModel;
