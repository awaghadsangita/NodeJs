/************************************************************************************************
 * @purpose	:implement vending machine giveing change in minimum notes
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019 
 * @version :1.0
 * 
 **************************************************************************************************/
const utility = require("../Utility/Utility");

vendingMachine = () => {

    console.log(`Enter amount for change`);
    let amount = utility.getInputNumber();

    utility.getChange(amount);

}

module.exports = vendingMachine();