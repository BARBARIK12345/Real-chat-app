const jwt = require("jsonwebtoken")


const authmiddleware = async (req, res, next)=>{
  try {
    
  
    const token = req.cookies.jwttoken
    jwt.verify(token , process.env.JWT_SECRET_KEY , (error , decode)=>{

        if (error) {
            return res.status(201).send({success : false , message : "Autherisation failed"})
        }
        else {
            req.body.userId = decode.name;
            next();
        }
        })  
    } catch (error) {
     return res.status(500).send({success : false , message : `Authorisation Failed ${error}`})
}   
}

module.exports = authmiddleware;
