const utility = require('../Utility/Utility');
const que = require('../Utility/Queue');

bankingCashCounter = () => {
    try {
        let choice;
        let availableBalance = 50000;
        let queObj = new que.Queue();
        do {
            console.log('*************************')
            console.log('1.Add Person in Queue');
            console.log('2.Deposite Amount');
            console.log('3.Withdraw Amount');
            console.log('4.Exit');
            console.log('Enter your Choice');
            choice = utility.getInputNumber();

            switch (choice) {
                case 1: console.log('How many person you want to add in queue');
                    let totalPerson = utility.getInputNumber();
                    if (totalPerson == 0)
                        throw 'you should add atleast one person in queue';
                    let lastperson = queObj.getLastItem();
                    for (let i = 0; i < totalPerson; i++) {
                        queObj.enqueue(++lastperson);
                    }
                    console.log(`Queue Status `);
                    queObj.display();
                    break;
                case 2:
                    if (queObj.isEmpty()) {
                        console.log('please stand in the queue');
                    } else {
                        console.log('Enter the amount you want to deposit');
                        let depositAmount = utility.getInputNumber();
                        availableBalance = availableBalance + depositAmount;
                        console.log(`Available Balance :${availableBalance}`);
                        console.log(`successfully deposit ${depositAmount}`);
                        queObj.dequeue();
                    }
                    break;
                case 3:
                    let reply = 'n';
                    do {
                        if (queObj.isEmpty()) {
                            console.log('please stand in queue');
                        }
                        else {
                            console.log('Enter the amount you want to withdraw');
                            let withdrawAmount = utility.getInputNumber()
                            if (availableBalance < withdrawAmount) {
                                console.log('sorry, bank does not have enough balance');
                                console.log('you want to withdaw less amount if yes press "y" if no press "n"');
                                reply = utility.getString();
                            }
                            else {
                                availableBalance = availableBalance - withdrawAmount;
                                console.log(`available Balance :${availableBalance}`);
                                console.log(`successfully withdaw ${withdrawAmount}`);
                                reply = 'n';
                                queObj.dequeue();
                                console.log("Queue Status");
                                queObj.display();
                            }
                        }
                    } while (reply == 'y');


                    break;

                case 4: process.exit();
            }
        } while (choice != 4);
    }
    catch (e) {
        console.log(`error occured:${e}`);
    }
}
module.exports = bankingCashCounter();