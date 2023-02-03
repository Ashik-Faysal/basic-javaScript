function factoreal(number) {
    let result = 1;
    for (let i = number; i >= 1; i--){
        result = result * i;
        // console.log(i);
    }
    return result;
}
const number = 5;
const fact = factoreal(number);
console.log("factoreal of : ", number,"!=", fact);