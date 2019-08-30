/*************************************************************************************************
 * @purpose	:read the text from a file, split it into words and arrange it as linked List. take a user input to search a Word in the List. If the Word is not found then add it 
 *           to the list, and if it found then remove the word from the List. In the end save the list into a file
 *  
 * @auther	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility = require('../Utility/Utility');
const fs = require('fs');
const linkedlistUtility = require('../Utility/LinkedList');

unOrderList = () => {
    let listObj = new linkedlistUtility.LinkList();
    let choice;
    let filename = '../Files/unorderedList.txt'

    do {
        let dataString = fs.readFileSync(filename);//read text file synchronously
        let dataArray = dataString.toString().split(',');//split data string into array
        console.log(dataArray);

        for (let i = 0; i < dataArray.length - 1; i++) {
            let node = new linkedlistUtility.Node(dataArray[i], null);
            listObj.insertAtEnd(node);//call insert node at end of list
        }
        console.log("List of Elements in file")
        listObj.display();//call display of linked list

        console.log("Enter the word to search in file");
        let word = utility.getString();//getting user input to search in list

        let position = listObj.index(word)//find position of searchword in list
        if (position == -1) {//if searchword not found then insert at end of link list
            console.log(`${word} NOT Found in the list`);
            let node = new linkedlistUtility.Node(word, null);//creating object of node 
            listObj.insertAtEnd(node);//insert node at end of linked list
        }
        else {//if searchword found in list remove it from list
            console.log(`${word} IS Found in the list at position ${position}`);
            listObj.deleteAt(position);//call delete at specific method to delete node from linked ;ist
        }
        listObj.display();//call display method of linked list
        let content = listObj.getString();//return node data as string
        fs.writeFileSync(filename, content);//call write method of fs module to write content into file
        console.log("file write successfully");
        console.log('do you want to continue(yes/no)');//asked user to perfrom serach one more time
        choice = utility.getString();

    } while (choice != 'no');
}
module.exports = unOrderList();