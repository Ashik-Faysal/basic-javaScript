/* Write a function called oddEven() which takes an integer value and tells whether this value is even or odd.You need to do it in 4 ways:

1. Has return + Has parameter
2.No return + Has parameter */

// 1. Has return + Has parameter
function oddEven(num) {
    return num % 2 == 0 ? "even" : "odd";
}

// 2. No return + Has parameter
function oddEven2(num) {
    console.log(num % 2 == 0 ? "even" : "odd");
}
const num1 = 13;
const num2 = 24;

console.log(`${num1} is ${oddEven(num1)}`);
console.log(`${num2} is ${oddEven(num2)}`);

oddEven2(num1);
oddEven2(num2);
