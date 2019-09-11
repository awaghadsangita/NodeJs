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