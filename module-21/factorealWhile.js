function factoreal(number) {
    let num = 1;
    let result = 1;
    while (num <= number) {
        result = result * num;
        num++;
    }
    return result;
}
const number = 6;
const fact = factoreal(number);
console.log("factoreal of : ", number, "!=", fact);