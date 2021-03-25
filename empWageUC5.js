const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_DAYS = 20;
const MAX_WORKING_HOUR = 160;

function getWorkingHours(empCheck){
    switch(empCheck){
       case IS_PART_TIME:
            return PART_TIME_HOUR;
        case IS_FULL_TIME:
         return FULL_TIME_HOUR;
        default:
            return 0;
    }
}

let totalEmpHr = 0;
let days = 0;
while(totalEmpHr < MAX_WORKING_HOUR && days < NUM_OF_DAYS){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHr = totalEmpHr + empHrs; 
    days++
}

let empWage = totalEmpHr * WAGE_PER_HOUR;
console.log("Total Days: "+days+" Working Hr: "+ totalEmpHr+ ", Emp Wage: "+ empWage);