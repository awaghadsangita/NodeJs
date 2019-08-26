/***************************************************************************************************************
 * @purpose	:outputs the binary (base 2) representation of the decimal number typed as the input
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility=require("../Utility/Utility");
 toBinary=()=>{
     let decimal;
     do{
        console.log(`enter the positive decimal number`);
        decimal=utility.getInputNumber();
    }while(decimal<0);

    let binary=utility.decimalToBinary(decimal);
    console.log(`\ndecimal: ${decimal} \nbinary:${binary}`);


 }
 module.exports=toBinary();