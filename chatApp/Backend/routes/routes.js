var express = require('express');
var router = express.Router();
var controllerMethod = require('../controller/controller');
const tokenVerified=require('../middleware/tokenGenrator')


router.post('/registration', controllerMethod.registration);

router.post('/login', controllerMethod.login);

router.post('/forgetPassword',controllerMethod.forgetPassword);

router.post('/resetPassword',tokenVerified.verifyToken,controllerMethod.resetPassword)

module.exports = router;