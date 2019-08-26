/**************************************************************************************************************
 * @purpose :reading file Asynchrously
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :25-08-2019
 * 
 **************************************************************************************************************/
const utility=require('../Utility/Utility');
const fs=require('fs');
let filename='text.txt';
    
fs.readFile(filename,function(err,data){
    if(err)
        console.log(err);
    else
        console.log('Asynchronus Read Opereation\n'+data.toString());    
});
console.log('after read operation ');
