const mongoose = require("mongoose")


const connectDB = async()=>{
   try{
    await mongoose.connect("mongodb://localhost:27017")
    console.log("Database is conected")  

} catch(error){
  console.log(`the Error is ${error}`)
}

};

module.exports = connectDB;