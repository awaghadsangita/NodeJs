const utility = require('../../Utility/Utility');
const doctorUtility = require('./GetterSetterUtility');
const operationUtility = require('./CliniqueMgntOpertion');
const moment = require('moment')
const dateFormat = require('date-format');
class MainClass {
    constructor() {
        this.managementObj = new operationUtility.CliniqueOperation();
    }
    main() {
        try {
            let opertionChoice;
            let innerOpertionChoice;

            this.managementObj.getDoctorJsonArray();
            this.managementObj.getPatientJsonArray();
            this.managementObj.getAppointmentJsonArray();

            do {
                console.log('**********************CLINIQUE MANAGEMENT**********************************************************')
                console.log('\t1.search doctor');
                console.log('\t2.search patient');
                console.log('\t3.take appointment');
                console.log('\t4.exit');
                process.stdout.write('which operation do you want to perform :');
                opertionChoice = utility.getInputNumber();


                switch (opertionChoice) {
                    case 1:
                        do {
                            console.log('-----------------------------------------------------');
                            console.log('\t\tSEARCH DOCTOR');
                            console.log('-----------------------------------------------------');
                            console.log('\t\t1.seatch by id');
                            console.log('\t\t2.seatch by name');
                            console.log('\t\t3.seatch by specialization');
                            console.log('\t\t4.seatch by availability');
                            console.log('\t\t5.exit');
                            process.stdout.write('\thow to you want to search :');
                            innerOpertionChoice = utility.getInputNumber();
                            switch (innerOpertionChoice) {
                                case 1: {
                                    process.stdout.write('\tenter the doctor id :');
                                    let doctorid = utility.getInputNumber();
                                    let idArray = this.managementObj.getDoctorArrayId(doctorid);
                                    if (idArray instanceof Error) {
                                        throw idArray.message.toString();
                                    }
                                    if (idArray == -1) {
                                        throw 'doctor id does not exist';
                                    }
                                    let tc1 = this.managementObj.showDoctorDetails(idArray);
                                    if (tc1 instanceof Error) {
                                        throw tc1.message.toString();
                                    }
                                    process.stdout.write('\tdo you want appointment(yes/no) :');
                                    let replyOFAppointment = utility.getString();
                                    if (replyOFAppointment == 'yes') {
                                        let appoinetmentDate = this.managementObj.findAppointmentDate(idArray);
                                        if(appoinetmentDate instanceof Error)
                                        {
                                            throw appoinetmentDate.message.toString();
                                        }
                                        process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);
                                        let replyofSchedule = utility.getString();
                                        if (replyofSchedule == 'yes') {
                                            this.takeAppointment(idArray, appoinetmentDate);
                                        }
                                    }
                                }
                                    break;
                                case 2: {
                                    process.stdout.write('\tenter the doctor name :');
                                    let doctorname = utility.getName();
                                    doctorname = 'Dr.' + doctorname;

                                    let idArray;
                                    idArray = this.managementObj.getDoctorByName(doctorname);

                                    if (idArray instanceof Error) {
                                        throw idArray.message.toString();
                                    }
                                    if (idArray == -1) {
                                        throw 'doctor name does not exist';
                                    }
                                    let tc1 = this.managementObj.showDoctorDetails(idArray);
                                    if (tc1 instanceof Error) {
                                        throw tc1.message.toString();
                                    }
                                    process.stdout.write('\tdo you want appointment(yes/no) :');
                                    let replyOFAppointment = utility.getString();
                                    if (replyOFAppointment == 'yes') {
                                        let appoinetmentDate = this.managementObj.findAppointmentDate(idArray);
                                        if(appoinetmentDate instanceof toString())
                                        {
                                            throw appoinetmentDate.message.toString();
                                        }
                                        process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);
                                        let replyofSchedule = utility.getString();
                                        if (replyofSchedule == 'yes') {
                                            this.takeAppointment(idArray, appoinetmentDate);
                                        }
                                    }
                                }
                                    break;
                                case 3:
                                    {
                                        process.stdout.write('\tenter the doctor specialization :');
                                        let specializatione = utility.getNextLine();
                                        let idArray = this.managementObj.getDoctorBySpecialization(specializatione);
                                        if (idArray == -1) {
                                            throw `doctor with ${specializatione} is not found`;
                                        }
                                        if (idArray instanceof Error) {
                                            throw idArray.message.toString();
                                        }
                                        let tc1 = this.managementObj.showDoctorDetails(idArray);
                                        if (tc1 instanceof Error) {
                                            throw tc1.message.toString();
                                        }
                                        process.stdout.write('\tdo you want appointment(yes/no) :');
                                        let replyOFAppointment = utility.getString();
                                        if (replyOFAppointment == 'yes') {
                                            process.stdout.write(`enter the doctor id :`);
                                            let doctorid = utility.getInputNumber();
                                            let arrayindex = this.managementObj.getDoctorArrayId(doctorid);
            
                                            if (arrayindex instanceof Error) {
                                                throw arrayindex.message.toString();
                                            }
                                            if (arrayindex == -1) {
                                                throw 'doctor does not exist';
                                            }
                                            let appoinetmentDate = this.managementObj.findAppointmentDate(arrayindex);
                                            if (appoinetmentDate instanceof Error) {
                                                throw appoinetmentDate.message.toString();
                                            }
                                            process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);
                                            let replyofSchedule = utility.getString();
                                            if (replyofSchedule == 'yes') {
                                                this.takeAppointment(arrayindex, appoinetmentDate);
                                            }
                                        }
                                    }
                                    break;
                                case 4:
                                    {
                                        console.log('\t1. AM');
                                        console.log('\t2. PM');
                                        console.log('\t3. BOTH');
                                        process.stdout.write('\t\nin which shift you want doctor available :');
                                        let shift = utility.getInputNumber();
                                        let availability;
                                        if (shift == 1)
                                            availability = 'AM';
                                        else if (shift == 2)
                                            availability = 'PM';
                                        else if (shift == 3)
                                            availability = 'BOTH';
                                        else
                                            throw 'invalid availability';
                                        let idArray = this.managementObj.getDoctorByAvailability(availability);
                                        if(idArray instanceof Error)
                                        {
                                            throw idArray.message.toString();
                                        }
                                        let tc1=this.managementObj.showDoctorDetails(idArray);
                                        if(tc1 instanceof Error)
                                        {
                                            throw tc1.message.toString();
                                        }
                                        process.stdout.write('\tdo you want appointment(yes/no) :');
                                        let replyOFAppointment = utility.getString();
                                        if (replyOFAppointment == 'yes') {
                                            process.stdout.write(`enter the doctor id :`);
                                            let doctorid = utility.getInputNumber();
                                            let arrayindex = this.managementObj.getDoctorArrayId(doctorid);
                                            if(arrayindex==-1)
                                            {
                                                throw `doctor with doctor id ${doctorid} does not exist`;
                                            }
                                            if(arrayindex instanceof Error)
                                            {
                                                throw arrayindex.message.toString();
                                            }
                                            let appoinetmentDate = this.managementObj.findAppointmentDate(arrayindex);
                                            if(appoinetmentDate instanceof Error)
                                            {
                                                throw appoinetmentDate.message.toString();
                                            }
                                            process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);
                                            let replyofSchedule = utility.getString();
                                            if (replyofSchedule == 'yes') {
                                                this.takeAppointment(arrayindex, appoinetmentDate);
                                            }
                                        }
                                    }
                                    break;
                            }
                        } while (innerOpertionChoice != 5);
                        break;
                    case 2: {
                        console.log('-----------------------------------------------------');
                        console.log('\t\tSEARCH PATIENT');
                        console.log('-----------------------------------------------------');
                        console.log('\t\t1.seatch by id');
                        console.log('\t\t2.seatch by name');
                        console.log('\t\t3.seatch by mobile number');
                        console.log('\t\t4.exit');
                        process.stdout.write('\thow to you want to search  patient :');
                        innerOpertionChoice = utility.getInputNumber();
                        switch (innerOpertionChoice) {
                            case 1: {
                                process.stdout.write('\tenter patient id :');
                                let pid = utility.getInputNumber();
                                let indexedArray = this.managementObj.getPatientById(pid);
                                if(indexedArray==-1)
                                {
                                    throw `patient with patient id ${pid} does not exist`;
                                }
                                if(indexedArray instanceof Error)
                                {
                                    throw indexedArray.message.toString();
                                }
                                let tc1=this.managementObj.showPatientDetails(indexedArray);
                                if(tc1 instanceof Error)
                                {
                                    throw tc1.message.toString();
                                }
                            }
                                break;
                            case 2: {
                                process.stdout.write('\tenter patient name :');
                                let pname = utility.getName();
                                if(pname instanceof Error)
                                {
                                    throw pname.message.toString();
                                }
                                let indexedArray = this.managementObj.getPatientByName(pname);
                                if(indexedArray==-1)
                                {
                                    throw `patient with name ${pname} does not exist`;
                                }
                                if(indexedArray instanceof Error)
                                {
                                    throw indexedArray.message.toString();
                                }
                                let tc1=this.managementObj.showPatientDetails(indexedArray);
                                if(tc1 instanceof Error)
                                {
                                    throw tc1.message.toString();
                                }
                            }
                                break;
                            case 3: {
                                process.stdout.write('\tenter mobile number :');
                                let mobilenumber = utility.getMobileNumber();
                                let indexedArray = this.managementObj.getPatientByMobileNumber(mobilenumber);
                                if(indexedArray==-1)
                                {
                                    throw `Patient with mobile number ${mobilenumber} does not exist`;
                                }
                                if(indexedArray instanceof Error)
                                {
                                    throw indexedArray.message.toString();
                                }
                                let tc1=this.managementObj.showPatientDetails(indexedArray);
                                if(tc1 instanceof Error)
                                {
                                    throw tc1.message.toString();
                                }
                            }
                                break;
                            default: console.log('Invalid Choice');
                        }
                    }
                    break;
                    case 3: {
                        process.stdout.write('\tenter the doctor name :');
                        let doctorname = utility.getName();
                        doctorname = 'Dr.' + doctorname;
                        let idArray = this.managementObj.getDoctorByName(doctorname);
                        this.managementObj.showDoctorDetails(idArray);
                        process.stdout.write('\tdo you want appointment(yes/no) :');
                        let replyOFAppointment = utility.getString();
                        if (replyOFAppointment == 'yes') {
                            let appoinetmentDate = this.managementObj.findAppointmentDate(idArray);
                            process.stdout.write(`\nshould i schedule appointment on ${appoinetmentDate} (yes/no) :`);
                            let replyofSchedule = utility.getString();
                            if (replyofSchedule == 'yes') {
                                this.takeAppointment(idArray, appoinetmentDate);
                            }
                        }
                    }
                        break;
                    case 4: process.exit();
                    default: console.log(`invalid choice`);
                }

            } while (opertionChoice != 4);
        } catch (e) {
            console.log(`Error occured :${e}`);
        }
    }
    takeAppointment(doctorArrayIndex, appointmentDate) {
        try {
            process.stdout.write(`\nare you new patient (yes/no)`);
            let isNew = utility.getString();
            let patientid;
            if (isNew == 'yes') {
                process.stdout.write('enter patient name :');
                let name = utility.getName();
                if(name instanceof Error)
                {
                    throw name.message.toString();
                }
                process.stdout.write('enter mobile number :');
                let mobilenumber = utility.getMobileNumber();
                if(mobilenumber instanceof Error)
                {
                    throw mobilenumber.message.toString();
                }
                process.stdout.write('enter age of the patient :');
                let age = utility.getInputNumber();
                patientid = this.managementObj.addNewPatient(name, mobilenumber, age);
            }
            else {
                process.stdout.write('enter patient id :');
                patientid = utility.getInputNumber();
            }
            
            let isSchedule = this.managementObj.addAppointment(patientid, doctorArrayIndex, appointmentDate);
            if (isSchedule == true) {
                console.log(`your appointment is schedule on ${appointmentDate}`);
            }
            if(isSchedule instanceof Error)
            {
                throw isSchedule.message.toString();
            }
            
        } catch (e) {
            return e;
        }
    }

}
module.exports = { MainClass };

let obj = new MainClass();
let today = new Date().toISOString().slice(0, 10);
console.log(today);
var now = new Date();
var dateString = moment(now).format('DD-MM-YYYY');
console.log(dateString);
obj.main();
