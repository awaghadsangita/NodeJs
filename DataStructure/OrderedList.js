const utility = require('../Utility/Utility');
const fs = require('fs');
const linkedlistUtility = require('../Utility/LinkedList');
orderedList = () => {
    let listObj = new linkedlistUtility.LinkList();
    let choice;
    let filename = '../Files/orderedList.txt'
  
    do {
        let dataString = fs.readFileSync(filename);
        let dataArray = dataString.toString().split(',');
        console.log(dataArray);

        for (let i = 0; i < dataArray.length - 1; i++) {

            let node = new linkedlistUtility.Node(dataArray[i], null);
            listObj.insertAtEnd(node);

        }
        console.log("List of elements in file")
        listObj.display();

        listObj.sortList();
        
        console.log("\nList of elements after sorting linked list")
        listObj.display();


        console.log("\nEnter the number to search in file");
        let word = utility.getInputNumber();

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
module.exports = orderedList();