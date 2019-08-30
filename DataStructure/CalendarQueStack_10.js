
/******************************************************************************************
 * @purpose	:Implement month of calendar using stack using linked list
 * 
 * @author 	:sangita avghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 ******************************************************************************************/
const utility = require('../Utility/Utility');
const linkList = require("../Utility/LinkedList");

calender = () => {
    try {
        let month = parseInt(process.argv[2]);
        let day = 1;
        let year = parseInt(process.argv[4]);
        let listQueObj = new linkList.LinkList();//create linked list object
        if (month <= 0 || month > 12)
            throw "month should be between 1 and 12";
        if (day <= 0 || day > 31)
            throw "day should be between 1 and 31";
        let calenderMonth = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (utility.isLeapYear(year)) {//check given year is leap year or not if yes set monthDays to 29
            monthDays[2] = 29;
        }
        let dayOfWeekIndex = utility.getDayOfWeek(month, day, year);//return index of day of week

        let mDays = new Array(7);
        let mMonth = [[], []];
        let count = 0;
        let i = 0;

        mMonth[i] = new Array(7);
        while (count < dayOfWeekIndex["result"]) {
            mMonth[i][count] = 0;
            let nodeObj1 = new linkList.DayNode(days[count], 0, null);//create calender node object
            listQueObj.insertAtEnd(nodeObj1);//call insert at end method of linked list to insert node
            count++;

        }
        let d = 1;

        while (d <= monthDays[month]) {

            count++;
            let nodeObj2 = new linkList.DayNode(days[count], d++, null)
            listQueObj.insertAtEnd(nodeObj2);//call insert at end method of linked list to insert node
            if (count % 7 == 0) {
                i++;
                mMonth[i] = new Array(7);
                count = 0;
            }
        }
        if (count % 7 != 0) {
            mMonth[i][count] = 0;
            count++;
            let nodeObj3 = new linkList.DayNode(days[count], 0, null)
            listQueObj.insertAtEnd(nodeObj);//call insert at end method of linked list to insert node in queue
        }

        console.log(`\n\t${calenderMonth[month]} ${year}`);
        console.log(`${days[0]} ${days[1]} ${days[2]} ${days[3]} ${days[4]} ${days[5]} ${days[6]}`);

        let listStkObj1 = new linkList.LinkList();
        let temp = listQueObj.HEAD.next;//get head of linked list which is call as top i.e front of the queue
        while(temp!=null)
        {
            let nodeStkObj1 = new linkList.DayNode(days[count],temp.data, null);
            listStkObj1.insertFirst(nodeStkObj1);//call insert at first method of linked list to insert node in first stack
            temp=temp.next;
        }

        let listStkObj2 = new linkList.LinkList();
        temp = listStkObj1.HEAD;//get head of linked list which is call as top i.e top of first stack
        while(temp!=null)
        {
            let nodeStkObj2 = new linkList.DayNode(days[count],temp.data, null);
            listStkObj2.insertFirst(nodeStkObj2);//call insert at first method of linked list to insert node in second stack
            temp=temp.next;
        }

        count = 0;
        let top=listStkObj2.HEAD.next;//get head of linked list which is call as top i.e top of second stack
        while (top != null) {
            let date = top.data;//get date from linekd list node
            if (date == 0)
                process.stdout.write(`    `);
            else if (date < 10)
                process.stdout.write(`${date}   `);
            else
                process.stdout.write(`${date}  `);

            top = top.next;//iterate head of linked list still last node
            count++;
            if (count % 7 == 0)
                console.log();
        }
    } catch (e) {
        console.log(`error occured :${e}`);
    }

}
module.exports = calender();