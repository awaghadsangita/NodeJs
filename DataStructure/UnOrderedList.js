const utility = require('../Utility/Utility');
const fs = require('fs');
const linkedlistUtility = require('../Utility/LinkedList');
unOrderList = () => {
    let listObj = new linkedlistUtility.LinkList();
    let choice;
    let filename = '../Files/unorderedList.txt'
  
    do {
        let dataString = fs.readFileSync(filename);
        let dataArray = dataString.toString().split(',');
        console.log(dataArray);

        for (let i = 0; i < dataArray.length - 1; i++) {

            let node = new linkedlistUtility.Node(dataArray[i], null);
            listObj.insertAtEnd(node);

        }
        console.log("List of Elements in file")
        listObj.display();

        console.log("Enter the word to search in file");
        let word = utility.getString();

        let position = listObj.index(word)
        if (position == -1) {
            console.log(`${word} NOT Found in the list`);
            let node = new linkedlistUtility.Node(word, null);
            listObj.insertAtEnd(node);
        }
        else {
            console.log(`${word} IS Found in the list at position ${position}`);
            listObj.deleteAt(position);
        }
        listObj.display();
        let content = listObj.getString();
        fs.writeFileSync(filename, content);
        console.log("file write successfully");
        console.log('do you want to continue(yes/no)');
        choice=utility.getString();

    } while (choice!='no');
}
module.exports = unOrderList();