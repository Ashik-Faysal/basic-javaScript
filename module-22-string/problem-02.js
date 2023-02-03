/* This year , not only Jim  & Dela but also Chinku are doing hard work to secure the first position . Can you find out who wil get the delicious cake?
[84 99 77] */

let jim = 84;
let dela = 99;
let chinku = 77;
// let jim = 69;
// let dela = 97;
// let chinku = 99;
if (jim > dela && jim > chinku) {
    console.log("Jim will get the delicious cake.")
}
else if (dela > jim && dela > chinku) {
    console.log("dela will get the delicious cake.");
}
else {
    console.log("chinku will get the delicious cake.");
}


// ----------------------------------------
const classTopper=Math.max(84, 99, 77);
console.log(classTopper);