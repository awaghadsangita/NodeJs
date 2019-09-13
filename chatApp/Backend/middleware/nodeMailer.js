const nodemailer=require('nodemailer');
require('dotenv').config();

exports.nodemailSender=(forgetPasswordDataObject,url,urlToken,callback)=>{

    console.log('user email',process.env.USERMAIL);
    console.log('user password',process.env.USERPASSWORD);

    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            // user:process.env.USERMAIL,
            // pass:process.env.USERPASSWORD
            user:'sangita.awaghad@gmail.com',
            pass:'sangita.awaghad1987'
        }
    });

    let mailoption={
        // from:process.env.USERMAIL,
        from:'sangita.awaghad@gmail.com',
        to:forgetPasswordDataObject.email,
        subject:'sending email to reset password',
        text:url,
        html:'<h1>click on link for verification</h1><br><p>Click <a href="http://localhost:3000/#/resetPassword/' + urlToken + '">here</a> to reset your password</p><br><br>'
    }
    transporter.sendMail(mailoption,(err,data)=>{
        if(err)
        {
            console.log('email not send');
            return callback(err);
        }else{
            return callback(null,'email send :'+data.response);
        }
    })
}