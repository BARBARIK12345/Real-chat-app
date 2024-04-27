const mongoose = require("mongoose")

const userschema= new mongoose.Schema({
  name :{
    type : String , 
    required : true,
    unique: true
    },
  email : {
     type : String,
     required : true,
     unique : true,
    }  ,
  password : {
      type : String ,
      required : true,   
    } ,
   
  })
  
  const userModel = mongoose.model("User" , userschema);
  
  module.exports = userModel;