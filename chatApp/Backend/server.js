var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose =require('mongoose');
var expressValidator=require('express-validator');
var router = require('./routes/routes');
var PORT = 3000;


app.use(express.static('../Frontend')) //front end connection 

app.use(expressValidator());

app.use(bodyParser.json());

app.use('/', router);



mongoose.connect('mongodb://127.0.0.1:27017/chatappDB', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("Connection failed because " + err);
    } else {
        console.log("MongoDB database connection established successfully");
    }

})

app.listen(PORT, ()=> {
    console.log("Server is running on Port: " + PORT);
});