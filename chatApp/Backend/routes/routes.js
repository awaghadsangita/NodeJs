var express = require('express');
var router = express.Router();
var controllerMethod = require('../controller/controller');


router.post('/registration', controllerMethod.registration);
router.post('/login', controllerMethod.login);

module.exports = router;