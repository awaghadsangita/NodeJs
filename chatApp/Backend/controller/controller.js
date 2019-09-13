const service=require('../services/service');

exports.registration=(req,res)=>{
    try{
        req.checkBody('firstName','should not be empty').notEmpty();
        req.checkBody('firstName','should be alphabets').isAlpha();
        
        req.checkBody('lastName', 'should not be empty').notEmpty();
        req.checkBody('lastName', 'should be alphabet').isAlpha();

        req.checkBody('email', 'email should not be empty').notEmpty();
        req.checkBody('email', 'email sould be valide').isEmail();

        req.checkBody('password', 'password should be have length 6 ').isLength({ min: 6 })
        req.checkBody('password', 'password should be have max length 12').isLength({ max: 12})

        let error = req.validationErrors();
        let response = {};

        if (error) {
            response.suceess = false;
            response.error = error
            return res.status(400).send(response)

        } else {
            let userRegisterDataObject = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }
            service.registrationService(userRegisterDataObject, (err, data) => {
                if (err) {
                    response.success = false;
                    response.error = err;
                    return res.status(422).send(response)
                } else {
                    response.success = true;
                    response.content = data;
                    return res.status(200).send(response)
                }

            })
        }
    }catch(e)
    {
        console.log('Error occured ',e);
    }
}

exports.login=(req,res)=>{
    try{
        console.log("in controller");
        
        req.checkBody('email', 'email should not be empty').notEmpty();
        req.checkBody('email', 'email should be valide').isEmail();

        req.checkBody('password', 'password should be have length 6 ').isLength({ min: 6 });
        req.checkBody('password', 'password should be have max length 12').isLength({ max: 12});

        let error=req.validationErrors();
        let response={};

        if(error)
        {
            response.success=false;
            response.error=error;

            return res.status(400).send(response);
        }
        else{
            let userLoginDataObject={
                email:req.body.email,
                password:req.body.password
            }
            service.loginService(userLoginDataObject,(err,data)=>{
                if(err)
                {
                    response.success=false;
                    response.error=err;

                    return res.status(422).send(response);
                }else{
                    if(data){
                        response.success=true;
                        response.content=data;

                        return res.status(200).send(response);
                    }
                }

            })
        }
    }catch(e)
    {
        console.log('Error Occured ',e);
    }
}

exports.forgetPassword=(req,res)=>{
    try{

    req.checkBody('email', 'email should not be empty').notEmpty();
    req.checkBody('email', 'email should be valide').isEmail();

    let error = req.validationErrors();
    let response = {};

    if (error) {
        /** make response array with it's field */
        response.suceess = false;
        response.message="Error occured in request at the time of validation";
        response.error = error
        /** send respose to server  */
        return res.status(400).send(response)

    } else {

        /** parsing body data into node object  */
        let userForgetPasswordDataObject = {
            email: req.body.email
        }

        /** 
         * call service method and passs node object which have body data
         * callback get ans from service in form of err and data
         */
        service.forgetPasswordService(userForgetPasswordDataObject, (err, data) => {
            if (err) {
                /** make response array with it's field */
                response.success = false;
                response.message="Email sending failed for forget password"
                response.error = err;
                /** send respose to server  */
                return res.status(422).send(response)
            } else {
                /** make response array with it's field */
                response.success = true;
                response.message="Email sending successfully for forget password"
                response.content = data;
                /** send respose to server  */
                return res.status(200).send(response)
            }

        })
    }
}catch(e){
    console.log(e);
    
}
}

exports.resetPassword=(req,res)=>{
    try{

        console.log("req data",JSON.stringify(req.token._id));
        
        req.checkBody('password', 'password should be have length 6 ').isLength({ min: 6 })
        req.checkBody('password', 'password should be have max length 12').isLength({ max: 20})
    
        console.log("backend controller called ");
        
    let error = req.validationErrors();
    let response = {};

    if (error) {
        /** make response array with it's field */
        response.suceess = false;
        response.message="Error occured in request after processing request";
        response.error = error
        /** send respose to server  */
        return res.status(400).send(response)

    } else {

        /** parsing body data into node object  */
        //let token=JSON.stringify(req.token);

        let userResetPasswordDataObject = {
            password: req.body.password,
            _id:req.token._id
            
        }

        /** 
         * call service method and passs node object which have body data
         * callback get ans from service in form of err and data
         */
        service.resetpasswordService(userResetPasswordDataObject, (err, data) => {
            if (err) {
                /** make response array with it's field */
                response.success = false;
                response.message="reset Password not done"
                response.error = err;
                /** send respose to server  */
                return res.status(422).send(response)
            } else {
                /** make response array with it's field */
                response.success = true;
                response.message="reset Password done"
                response.content = data;
                /** send respose to server  */
                return res.status(200).send(response)
            }

        })
    }
}catch(e){
    console.log(e);
    
}

}
