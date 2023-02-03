function add(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "please enter a number";
    }
    return num1 + num2;
}
const total = add(72, "15");
console.log(total);


//----------------------
function multiply(num1, num2) {
    return num1 * num2;
}
const output = multiply(12, 5);
console.log(output);