const express = require("express")
const {registerController, loginController , logoutController} = require("../Controller/userCtrl");
const authmiddleware = require("../Middlewares/authmiddleware");
const {sendermssgController} = require("../Controller/chatController");

const router = express.Router()

router.post("/register" , registerController);
router.post("/login" , loginController);
router.post("/chat", authmiddleware , sendermssgController);
router.post("/logout" , logoutController)

module.exports = router;