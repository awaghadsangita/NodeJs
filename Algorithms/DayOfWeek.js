/***************************************************************************************************************
 * @purpose	:find day of week
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility=require("../Utility/Utility");

dayOfWeek=()=>{
    let month=parseInt(process.argv[2]);
    let day=parseInt(process.argv[3]);
    let year=parseInt(process.argv[4]);
    let days=["Sunday","Monday","Thuesday","Wednesday","Thuresday","Friday","Saturday"];

    let dayOfWeekIndex=utility.getDayOfWeek(month,day,year);
       
    console.log(`\n\ngiven date :${day}-${month}-${year}`);
    console.log(`day of week :${days[dayOfWeekIndex]}`);
}

module.exports=dayOfWeek();