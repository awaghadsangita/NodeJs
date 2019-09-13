const mongoose = require('mongoose');
const bycrypt = require('bcrypt');
const forgetMail = require('../middleware/nodeMailer')
const jwtTokenGenretor = require('../middleware/tokenGenrator')
const userschema = mongoose.Schema;
let userSchemaData = new userschema({
    firstName: {
        type: String,
        require:[true,"first name should be required"]
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique:true,

    },
    password: {
        type: String
    }
}, {
    timestamps: true
});

let userSchemaModel = mongoose.model("schemaModel", userSchemaData);

function encryptPassword(password, callback) {
    bycrypt.hash(password, 10, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data)
        }
    })
}

module.exports = {
    registrationModel(userRegisterDataObject, callback) {
        try {

            userSchemaModel.find({ 'email': userRegisterDataObject.email }, 'email', (err, data) => {
                if (err || data.length > 0) {
                    if (err) {
                        return callback(err);
                    } else {
                        console.log("email already exits");

                        return callback(null, false);
                    }

                } else {

                    console.log("before encryption Password :" + userRegisterDataObject.password);

                    encryptPassword(userRegisterDataObject.password, (err, encryptedPassword) => {

                        if (err) {
                            return callback(err + " Encryption Failed")
                        } else {

                            console.log("After encryption Password :" + encryptedPassword);


                            let userRegistrationdetails = new userSchemaModel({
                                "firstName": userRegisterDataObject.firstName,
                                "lastName": userRegisterDataObject.lastName,
                                "email": userRegisterDataObject.email,
                                "password": encryptedPassword
                            })

                            console.log(userRegistrationdetails);
                            userRegistrationdetails.save((err, data) => {
                                if (err) {
                                    return callback(err)
                                } else {
                                    return callback(null, { message: "registration successfull", data })
                                }
                            })
                        }
                   })

                }
            })
        } catch (e) {
            console.log(e);
        }
    },
    loginModel(userLoginDataObject,callback){
        try{
            console.log('User Email :',userLoginDataObject.email);
            userSchemaModel.find({'email':userLoginDataObject.email},null,(err,data)=>{
                if(err)
                {
                    console.log(err +"error in finding email");
                    return callback(err);
                }
                else{
                    console.log('successfully logged in ',userLoginDataObject.password);
                    console.log(data);
                    bycrypt.compare(userLoginDataObject.password,data[0].password,(err,data)=>{
                        if(err)
                        {
                            return callback(err)
                        }
                        else{
                            if(data){
                                console.log('successfully logged in');
                                return callback(null,data+'successfully logged in');
                            }
                            else{
                                console.log('your credential does not matched ');
                                return callback(null,data);
                            }
                        }
                    })
                }
            })
        }catch(e)
        {
            console.log(e);
        }
    },
    forgetPasswordModel(forgetPasswordDataObject,callback){
        try{
            console.log('User Email id :',forgetPasswordDataObject.email);
            userSchemaModel.find({'email':forgetPasswordDataObject.email},null,(err,data)=>{
                if(err)
                {
                    console.log('Error in Finding Email :',err);
                    return callback(err);
                }else{
                    console.log('email',data);
                    if(data.length<=0)
                    {
                        console.log('your Credential not matched');
                        return callback(null,false);
                    }else{
                        console.log('your credential matched');
                        let payload={
                            '_id': data[0]._id
                        }
                        let jwtTokan=jwtTokenGenretor.generateToken(payload);
                        console.log('Tokan :',jwtTokan);
                        let url="http://localhost:3000/#/resetPassword/"+jwtTokan.token;
                        forgetMail.nodemailSender(forgetPasswordDataObject,url,jwtTokan.token,(err,data)=>{
                            if(err){
                                return callback(err);
                            }
                            else{
                                return callback(null,data);
                            }
                        })
                    }
                }
            });
        }catch(e)
        {
            console.log(e);
        }
    },
    resetpasswordModel(resetpasswordDataObject,callback){
        try{
            console.log('Reset Password Data :',resetpasswordDataObject.newPassword);
            console.log('Id :',resetpasswordDataObject._id);
            encryptPassword(resetpasswordDataObject.password,(err,hashPassword)=>{
                if(err){
                    console.log('update document error');
                    return callback(err+" update document error");
                }else{
                    userSchemaModel.findOneAndUpdate({'_id':resetpasswordDataObject._id},{$set:{'password':hashPassword}},(err,data)=>{
                        if (err) {
                            console.log("update document error");
                            return callback(err + " update document error")
                        } else {
                            if (data) {
                                console.log("update document success");
                                return callback(null, data)
                            } else {
                                console.log("user credential not found");
                                return callback("user credential not found")
                            }
                        }
                    })
                }
            })
        }catch(e){
            console.log(e);
        }
    }

}