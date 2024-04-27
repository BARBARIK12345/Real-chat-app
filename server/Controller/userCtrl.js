const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");

const registerController = async (req , res) => {
  try {
     const {name , email } = req.body

    const existuser = await userModel.findOne({ email: req.body.email });
    console.log(req.body)
    if (existuser) {
      res.send({ success: false, message: "user is already there" });
    }
    if (req.body.password !== req.body.confirmPassword) {
      return res
        .status(201)
        .send({ success: false, message: "Password not matched Please check" });
    }
    const password = req.body.password;
    const salt =  bcrypt.genSaltSync(10);
    const hashpswrd = await bcrypt.hash(password, salt);
    if (!existuser) {
      userModel.create({
        name,
        email,
        password : hashpswrd,
      });
      return res.status(201).send({
        success: true,
        // data: req.body,
        message: "Register successfully",
      });
    }
  } catch (error) {
      res.status(500).send({
      success: false,
      message: `SOmething Wrong with me ${error.message}`,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const userlogin = await userModel.findOne({ email: req.body.email });
    if (!userlogin) {
      return res
        .status(200)
        .send({ success: false, message: "You dont have acount with us" });
    }
    if (userlogin) {
      const pswrdMatch = await bcrypt.compare(
        req.body.password,
        userlogin.password
      );
      if (!pswrdMatch) {
        return res
          .status(201)
          .send({ success: false, message: "Password Incorrect" });
      }

      const token = jwt.sign(
        { name: userlogin.name },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1d" }
      );
      res.cookie("jwttoken", token, {
        httpOnly: true,
        secure: true,
        maxAge: 10 * 24 * 60 * 60 * 1000,
      });
      return res.send({
        success: true,
        message: "logged in successfully",
        token,
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: `Login failed, ${error.message}` });
  }
};

module.exports = { registerController, loginController };
