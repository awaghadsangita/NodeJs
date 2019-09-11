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
    }
}