/***************************************************************************************************
 * @purpose :check username is greater than 3 in length and print hello username,how are you
 * @Author	:sangita awaghad
 * @since	:23-08-2019
 *********************************************************************************************************/
const readInput = require('../Utility/Utility');

replaceString = () => {
    var givenString = "Hello <<UserName>>, How are you?";
    do {
        console.log("Enter User Name");
        var username = readInput.getString();
        if (username.length < 3)
            console.log("Username must contain atleast 3 Characters");
    } while (username.length < 3);

    console.log(givenString.replace("<<UserName>>", username));
    return username;
}

module.exports = replaceString();