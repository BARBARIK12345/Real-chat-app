const chatModel = require("../Models/chatModel")


const chatController= async(req, res)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({success : false , message : `Server Error ${error}`})
        
    }
}

module.exports = chatController