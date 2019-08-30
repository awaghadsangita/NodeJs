/*************************************************************************************************
 * @purpose	:checking equation has opening parentheses and same closing parentheses
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:20-08-2019
 * 
 **************************************************************************************************/
const utility = require('../Utility/Utility');
const stacks = require('../Utility/Stack');
balancedParentheses = () => {
    let stackObj = new stacks.Stack();
    let wantToContinue;
    let isMatched;
    do {
        console.log('enter the expression :');
        let expression = utility.getNextLine();
        let expressionArray = expression.split('');

        for (let i = 0; i < expressionArray.length; i++) {
            if (expressionArray[i] == '(' || expressionArray[i] == '{' || expressionArray == '[', expressionArray == '<') {
                stackObj.push(expressionArray[i]);
            }
        }

        isMatched = true;
        for (let i = 0; i < expressionArray.length; i++) {
            if (expressionArray[i] == ')' || expressionArray[i] == '}' || expressionArray[i] == ']' || expressionArray[i] == '>') {
                let popedItem = stackObj.pop();//poping item from stack when closing bracket find

                if (expressionArray[i] == ')' && popedItem != '(' || expressionArray[i] == '}' && popedItem != '{' || expressionArray[i] == ']' && popedItem != '[' || expressionArray[i] == '>' && popedItem != '<') {  //execute if blook when we dont get respective closing bracket
                    isMatched = false;
                    break;
                }
            }
        }
        if (isMatched == false) {
            console.log(`${expression} has NOT have balancedParentheses`);
        }
        else {
            console.log(`${expression} have balancedParentheses`);
        }
        console.log('do you want check one more expression(yes/no)')
        wantToContinue = utility.getString();

    } while (wantToContinue != 'no');
}
module.exports = balancedParentheses();