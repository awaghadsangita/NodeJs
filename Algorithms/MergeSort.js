/***************************************************************************************************************
 * @purpose	:read list of string from keyboard and sort it ascending order using merge sort
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************************/
const utility = require("../Utility/Utility");
mergeSortString = () => {
    try {
        console.log(`how many string you want in array list i.e(size of the array)`);
        let size = utility.getInputNumber();

        let stringArr = new Array(size);
        console.log(`enter ${size} strings`);
        for (let i = 0; i < size; i++) {
            stringArr[i] = utility.getString();
        }

        utility.mergeSort(stringArr, 0, size - 1);

        console.log(`\n\nsorted string are as follows`);
        for (let i = 0; i < size; i++) {
            console.log(stringArr[i]);
        }

    } catch (e) {
        console.log(`Error Occured :${e}`);
    }
}
module.exports = mergeSortString();