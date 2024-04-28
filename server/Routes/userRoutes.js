const express = require("express")
const {registerController, loginController} = require("../Controller/userCtrl");
const authmiddleware = require("../Middlewares/authmiddleware");
const chatController = require("../Controller/chatController");

const router = express.Router()

router.post("/register" , registerController);
router.post("/login" , loginController);
router.post("/chat", authmiddleware , chatController);

module.exports = router;