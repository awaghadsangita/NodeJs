/*******************************************************************************************************
 * @purpose	:create a program which creates banking cash counter where people come in to deposit Cash and withdraw Cash
 * 			add people in queue
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:03-08-2019
 * 
 *******************************************************************************************************/
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
                    if(typeof lastperson!='number')
                    {
                        throw lastperson;
                    }
                    for (let i = 0; i < totalPerson; i++) {
                        let tc1=queObj.enqueue(++lastperson);//call add method to add person in queue
                        if(tc1!='success')
                        {
                            throw tc1;
                        }
                    }
                    console.log(`Queue Status `);
                    let tc2=queObj.display();//call display method for displaying queue status
                    if(tc2!='success')
                    {
                        throw tc2;
                    }
                    break;
                case 2:
                    if (queObj.isEmpty()) {//check queue status before deposit operation
                        console.log('please stand in the queue');
                    } else {
                        console.log('Enter the amount you want to deposit');
                        let depositAmount = utility.getInputNumber();
                        availableBalance = availableBalance + depositAmount;
                        console.log(`Available Balance :${availableBalance}`);
                        console.log(`successfully deposit ${depositAmount}`);
                        let tc3=queObj.dequeue();//call dequeue method to remove person from queue
                        if(tc3=='queue is empty')
                        {
                            throw tc3;
                        }
                    }
                    break;
                case 3:
                    let reply = 'n';
                    do {
                        if (queObj.isEmpty()) {//check queue status befor doing withdaw operation
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
                                let tc4=queObj.dequeue();//call dequeu method to remove person from queue
                                if(tc4=='queue is empty')
                                {
                                    throw tc4;
                                }

                                console.log("Queue Status");
                                queObj.display();//display queue status
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