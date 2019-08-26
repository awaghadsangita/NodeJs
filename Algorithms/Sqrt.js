/***************************************************************************************************************
 * @purpose	:to compute the square root of a nonnegative number
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility=require("../Utility/Utility");

sqrt=()=>{
    let number;
    do{
        console.log(`enter non-negative number`);
        number=utility.getInputNumber();
    }while(number<0);

    let squareroot=utility.calculateSqaureRoot(number);
    console.log(`sqaure root of ${number} is ${squareroot}`);
}

module.exports=sqrt();
