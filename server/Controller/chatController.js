const chatModel = require("../Models/chatModel")


const sendermssgController= async(req, res)=>{
    try {
        const {send , reciv} = req.body
        const chatsuser = await chatModel.create({
            sender: send ,
            reciever: reciv,
            content : "newchat"
        })
        res.status(201).json({ success : true })
    } catch (error) {
        return res.status(500).send({success : false , message : `Server Error ${error}`})
        
    }
}

module.exports = {sendermssgController}