const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_DAYS = 20;

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

let totalEmpHr = 0
for(let day = 0; day < NUM_OF_DAYS; day++ ){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHr = totalEmpHr + empHrs;
}
let empWage = totalEmpHr * WAGE_PER_HOUR;
console.log("Working Hrs: "+ totalEmpHr+ ",Emp Wage: "+ empWage);