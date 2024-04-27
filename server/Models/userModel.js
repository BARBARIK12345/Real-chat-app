const mongoose = require("mongoose")

const userschema= new mongoose.Schema({
  name :{
     type : string , 
    required : true,
    unique: true
    },
  email : {
     type : string,
     required : true,
     unique : true,
    }  ,
  password : {
      type : string ,
      required : true,   
    } ,
   
  })
  
  const userModel = mongoose.model("User" , userschema);
  
  model.exports = userModel;