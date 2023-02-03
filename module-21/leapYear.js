// const number = 2023;
// if (number % 4 ===0) {
//     console.log("This year is leap Year.");
// }
// else {
//     console.log("This is not a leap year . This is normal year.");
// }

// function isLeapYear(year) {
//     const remaider = year % 4;
//     if (remaider === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const isMyLeapYear = isLeapYear(2020);
// console.log(isMyLeapYear);
// const isHerLeapYear = isLeapYear(2023);
// console.log(isHerLeapYear);

// shortcart

// function isLeapYear(year) {
//     const remaider = year % 4;
//     if (remaider === 0) {
//         return true;
//     }
//    return false; // else na diye shudhu eivabeo kora jai.
// }
// const isMyLeapYear = isLeapYear(2020);
// console.log(isMyLeapYear);
// const isHerLeapYear = isLeapYear(2023);
// console.log(isHerLeapYear);

function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    }
    return false;
}
const isLeapYear = leapYear(2100);
console.log(isLeapYear);
const isHerLeapYear = leapYear(2024);
console.log(isHerLeapYear);