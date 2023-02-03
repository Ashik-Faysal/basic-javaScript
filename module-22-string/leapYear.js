function getLeapYearArray(year) {
    const leapYear = [];
    for (i = 0; i < year.length; i++){
        const index = i;
        const element = year[index];
        if (element % 4 === 0) {
            leapYear.push(element);
        }
    }
    return leapYear;
}

const leapYearArray = [2012, 2056, 2041, 2000, 2100, 2052, 2042];
const resultLeapYear = getLeapYearArray(leapYearArray);
console.log(resultLeapYear);