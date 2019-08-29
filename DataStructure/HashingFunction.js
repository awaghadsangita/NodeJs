const utility = require('../Utility/Utility');
const linkedList = require('../Utility/LinkedList');
const fs = require('fs');
hashingFunction = () => {
    try {
        let listObj = [];
        for (let i = 0; i < 11; i++) {
            listObj[i] = new linkedList.LinkList();
        }
        let fileName = '../Files/hashing.txt';
        let choice;
        do {
            let dataString = fs.readFileSync(fileName);
            let dataArray = dataString.toString().split(',');

            for (let i = 0; i < dataArray.length - 1; i++) {
                let slot = dataArray[i] % 11;
                let node = new linkedList.Node(dataArray[i], null)
                listObj[slot].insertAtEnd(node);
            }
            console.log('Enter Element To Search');
            let elementToSearch=utility.getInputNumber();
            let slot=elementToSearch%11;
            let isFound=listObj[slot].index(elementToSearch);
            if(isFound==-1)
            {
                console.log(`${elementToSearch} is NOT Found`);
                let node = new linkedList.Node(elementToSearch, null)
                listObj[slot].insertAtEnd(node);
            }
            else
            {
                console.log(`${elementToSearch} is Found in Slot ${slot} at Position ${isFound}`);
                listObj[slot].deleteAt(isFound);
            }
            let content="";
            for (let i = 0; i < 11; i++) {
                process.stdout.write(`\nSlot ${i}  :`);
                listObj[i].display();
                content=content+listObj[i].getString();
            }
            fs.writeFileSync(fileName,content);
            process.stdout.write(`\ndo you want perform more search if yes press 'y' otherwise press 'n'`);
            choice = utility.getString();
        } while (choice != 'n');

    } catch (e) {
        console.log(e);
        return e;
    }
}
module.exports = hashingFunction();