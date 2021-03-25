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
let empDailyHrsAndWageArr = new Array();

while(totalEmpHr <= MAX_WORKING_HOUR && totalWorkingDays < NUM_OF_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck); 
    totalEmpHr +=empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\nDay' +this.dayNum + ' => Working Hours is ' + this.dailyHours +
                        ' And Wage Earned = ' + this.dailyWage
            },
        }
    );
}

//UC 10
//console.log("UC 10 - Showing Daily Hours Worked And Wage Earned: "+empDailyHrsAndWageArr);

//UC 11A
let totalWages = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = empDailyHrsAndWageArr
                 .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                 .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC 11A Total Hours: " +totalHours+ " Total Wages: "+totalWages);

//UC 11B
console.log("UC 11B logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C PartWorkingDayStrings: "+partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
                          .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                          .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NonWorkingDays: "+nonWorkingDayNums);

