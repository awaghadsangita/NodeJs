const model=require('../models/model');

module.exports={
    registrationService(userRegisterDataObject,callback)
    {
        try{
            model.registrationModel(userRegisterDataObject,(err,data)=>{
                if(err)
                    return callback(err);
                else
                    return callback(null,data);
            })
        }catch(e)
        {
            console.log(e);
        }
    },
    loginService(userLoginDataObject,callback)
    {
        try{
            model.loginModel(userLoginDataObject,(err,data)=>{
                if(err)
                {
                    return callback(err);
                }else{
                    return callback(null,data);
                }
            })
        }catch(e)
        {
            console.log(e);
        }
    },
    forgetPasswordService(forgetPasswordDataObject,callback)
    {
        try{
            model.forgetPasswordModel(forgetPasswordDataObject,(err,data)=>{
                if(err)
                {
                    return callback(err)
                }else{
                    return callback(null,data);
                }
            })
        }catch(e)
        {
            console.log(e);
        }
    },
    resetpasswordService(resetpasswordDataObject,callback){
        try{
            model.resetpasswordModel(resetpasswordDataObject, (err, data) => {
                if (err) {
                     /** send error to contoller callback function */
                    return callback(err)
                } else {
                    /** send message and data to contoller callback function */
                    return callback(null, data)
                }
    
            })
        }catch(e){
    
        } 
    }
}