/**************************************************************************************************************
 * @purpose :demonstrate error handling
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :25-08-2019
 * 
 **************************************************************************************************************/
var fs=require('fs');
var domain=require('domain');
var d=domain.create();
fs.readFile("tex.txt","utf8",function(err,data){
    if(err)
        throw err;

        console.log(data);
});
d.on("Error",function(err){
    console.log("exception was caught");
});
