const utility = require('../Utility/Utility');
calender = () => {
    try {
        let month = parseInt(process.argv[2]);
        let day = 1;
        let year = parseInt(process.argv[4]);

        if (month <= 0 || month > 12)
            throw "month should be between 1 and 12";
        if (day <= 0 || day > 31)
            throw "day should be between 1 and 31";
        let calenderMonth=["","January","February","March","April","May","June","July","August","September","October","November","December"];
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (utility.isLeapYear(year)) {
            monthDays[2] = 29;
        }
        let dayOfWeekIndex = utility.getDayOfWeek(month, day, year);

        if (dayOfWeekIndex["testcasetesult"] != 'success') {
            console.log(dayOfWeekIndex["result"]);
            console.log(`\n\ngiven date :${day}-${month}-${year}`);
            console.log(`day of week :${days[dayOfWeekIndex["result"]]}`);
        }
        let mDays = new Array(7);
        let mMonth = [[], []];
        let count = 0;
        let i = 0;
        mMonth[i] = new Array(7);
        while (count < dayOfWeekIndex["result"]) {
            mMonth[i][count] = 0;
            count++;
        }
        let d = 1;
        
        while (d <=monthDays[month]) {
            mMonth[i][count] = d++;
            count++;
            if (count % 7 == 0) {
                i++;
                mMonth[i] = new Array(7);
                count = 0;
            }
        }
        if (count % 7 != 0) {
            mMonth[i][count] = 0;
            count++;
        }
        console.log(`\n\t${calenderMonth[month]} ${year}`);
        console.log(`${days[0]} ${days[1]} ${days[2]} ${days[3]} ${days[4]} ${days[5]} ${days[6]}`);
        for(let i=0;i<mMonth.length-1;i++)
        {   mMonth[i];
            for(let j=0;j<mMonth[i].length;j++)
            {
                if(mMonth[i][j]==0)
                    process.stdout.write(`    `);
                else if(mMonth[i][j]<10)
                    process.stdout.write(`${mMonth[i][j]}   `);
                else
                    process.stdout.write(`${mMonth[i][j]}  `);
            }
            console.log();
        }

        
    } catch (e) {
        console.log(`error occured :${e}`);
        
    }

}
module.exports = calender();