/***************************************************************************************************************
 * @purpose	:take the temperature in fahrenheit as input outputs the temperature in celsius or viceversa
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility=require("../Utility/Utility");

temperaturConversion=()=>{
    console.log(`enter temperature in fahrenheit`);
    let fahrenheit=utility.getFloatInput();
    
    let celsius=utility.convertTemperatur(fahrenheit,"C");
    console.log(`Temperature in Celsius :${celsius}`);

    fahrenheit=utility.convertTemperatur(celsius,"F");
    console.log(`Temperature in Fahrenheit :${fahrenheit}`);
}
module.exports = temperaturConversion();