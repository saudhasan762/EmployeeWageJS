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

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHr = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while(totalEmpHr <= MAX_WORKING_HOUR && totalWorkingDays < NUM_OF_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck); 
    totalEmpHr +=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHr);
console.log("UC6 - Total Days: " + totalWorkingDays + " Total Working Hr: "+ totalEmpHr+ " Emp Wage: "+ empWage);

//UC 7A
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + " Total Working Hr: "+ totalEmpHr + " Emp Wage: "+ totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " +empDailyWageArr.reduce(totalWages, 0));

//UC 7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);

//UC 7D
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D - First time fulltime wage was earned on Day: "+mapDayWithWageArr.find(findFullTimeWage));

//UC 7E
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E - Check all elements have full time Wage: "+fullDayWageArr.every(isAllFullTimeWage));

//UC 7F
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));


//UC 7G
function totalDaysWorked(numofDays, dailyWage) {
    if(dailyWage > 0) return numofDays+1;
    return numofDays;
}
console.log("UC 7G - Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));

//UC 8
console.log(empDailyWageMap);
console.log("UC8 - Emp Wage Map Total Hrs: " +Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

//UC 9
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values())
                    .filter(dailyHours => dailyHours > 0)
                    .reduce(findTotal, 0);
let totalSalary = empDailyWageArr
                    .filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal, 0);
console.log("UC9A - Emp Wage with Arrow:" + "Total Hour:" +
            totalHours + "Total Wages: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);
