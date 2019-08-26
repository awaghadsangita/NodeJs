/****************************************************************************************************
 * @purpose	:read list of word from file and search word using Binary Search;
 * 
 * @author	:sangita awaghad
 * @since	:24-08-2019
 * @version :1.0
 * 
 ***************************************************************************************************/
const utility = require("../Utility/Utility");
const fs = require('fs');
binarySearch = () => {
    let path = "/home/admin1/nodeProject/binarySearchWord.txt";
    let data = fs.readFileSync(path);
    let data1 = data.toString().split(',');

    console.log(data1);
    console.log(`enter string to search`);
    let searchString = utility.getString();

    let isFound = utility.binarySearch(data1, searchString)

    if (isFound == -1) {
        console.log(`${searchString} is NOT found`);
    }
    else {
        console.log(`${searchString} is  found`);
    }
    return searchString;
}
module.exports = binarySearch();