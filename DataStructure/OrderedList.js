/*************************************************************************************************
 * @purpose	:read .a list of numbers from a file and arrange it ascending order in a linked list. 
 *          take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * 
 * @auther	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility = require('../Utility/Utility');
const fs = require('fs');
const linkedlistUtility = require('../Utility/LinkedList');

orderedList = () => {
    let listObj = new linkedlistUtility.LinkList();//create object linked list class
    let choice;
    let filename = '../Files/orderedList.txt'
  
    do {
        let dataString = fs.readFileSync(filename);//read file
        let dataArray = dataString.toString().split(',');//split dataString into array
        console.log(dataArray);

        for (let i = 0; i < dataArray.length - 1; i++) {

            let node = new linkedlistUtility.Node(dataArray[i], null);//create object of node class
            listObj.insertAtEnd(node);//insert node at end of linked list

        }
        console.log("List of elements in file")
        listObj.display();//call display method of linked list

        listObj.sortList();//call sort method to sort linked list node
        
        console.log("\nList of elements after sorting linked list")
        listObj.display();//call display method of linked list

        console.log("\nEnter the number to search in file");
        let number = utility.getInputNumber();//get the user input to serach number in linked list

        let position = listObj.index(number)//get position of serach number in a linked list
        if (position == -1) {//if serach number not found insert it into sorted array
            console.log(`${number} NOT Found in the list`);
            let node = new linkedlistUtility.Node(word, null);
            listObj.insertAtEnd(node);
        }
        else {//if serach number found in linked list delete it from linked list
            console.log(`${number} IS Found in the list at position ${position}`);
            listObj.deleteAt(position);
        }
        listObj.display();//call display method of linked list
        let content = listObj.getString();//get data from linked list in a string as comma separted list of number 
        fs.writeFileSync(filename, content);//write content into file
        console.log("file write successfully");
        console.log('do you want to continue(yes/no)');
        choice=utility.getString();

    } while (choice!='no');
}
module.exports = orderedList();