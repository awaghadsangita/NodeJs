var fs = require("fs");
//require('../../Files/unorderedList.txt') 
exampleReadStearm=()=>{
     
    var data = '';  
    // Create a readable stream  
    var readerStream = fs.createReadStream('../../Files/unorderedList.txt');  
    // Set the encoding to be utf8.   
    readerStream.setEncoding('UTF8');  
    // Handle stream events --> data, end, and error  
    readerStream.on('data', function(chunk) {  
        data += chunk;  
    });  
    readerStream.on('end',function(){  
        console.log(data);  
    });  
    readerStream.on('error', function(err){  
        console.log(err.stack);  
    });  
    console.log("Program Ended");  
}
module.exports=exampleReadStearm();