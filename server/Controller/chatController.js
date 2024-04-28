const chatModel = require("../Models/chatModel")


const sendermssgController= async(req, res)=>{
    try {
        const {sender , reciever , content} = req.body
        res.status(201).json({ message })
    } catch (error) {
        return res.status(500).send({success : false , message : `Server Error ${error}`})
        
    }
}

module.exports = {sendermssgController}