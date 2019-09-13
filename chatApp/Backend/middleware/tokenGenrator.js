var jwt = require('jsonwebtoken');
require('dotenv').config();
console.log(process.env.SCRETEKEY+" private key ")

exports.generateToken=(payload)=>{
    let token = jwt.sign(payload,'privateKey', {
        expiresIn: '24h' // (in sec) expires in 6 hours
     });

     let object={
         success:true,
         message:"token generated",
         token:token
     }
     return object;
}

exports.verifyToken=(req,res,next)=>{

    let token=req.body.token;
    console.log("token  ",req.body.token);
    

    if(token){
        jwt.verify(token,'privateKey',(err,decoded)=>{
            if(err)
            {
                res.status(400).send(err +" Token has expired")
            }else{
                console.log("token "+JSON.stringify(decoded));
                req.token=decoded;
                next();
            }
    
        })

    }else{
        console.log("token not receive");
        res.status(400).send(" Token not receive")
        
    }
 
}