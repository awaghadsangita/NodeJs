/******************************************************************************************************************
 * @purpose	:read list of string from keyboard and sort it ascending order using insertion sort
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ******************************************************************************************************************/
const utility = require("../Utility/Utility");
insertionSort = () => {
    try {
        console.log(`how many string you want in array i.e(size of array)`);
        let size = utility.getInputNumber();
        let stringArray = new Array(size);

        console.log(`Enter ${size} strings :`);
        for (let i = 0; i < size; i++) {
            stringArray[i] = utility.getString();
        }

        let sortedArray = utility.insertionSort(stringArray);
        console.log(`\n\nStrings in sorted order are as follows:`);
        for (let i = 0; i < size; i++) {
            console.log(sortedArray[i]);
        }
    } catch (e) {
        console.log(`Error Occured :${e}`);
    }
}
module.exports = insertionSort();