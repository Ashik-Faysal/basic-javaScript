let first = 5;
let second = 7;
console.log(first, second);
/*
    first = second;
    second = first;
*/

// approch one
const temp = first;
first = second;
second = temp;
// console.log(first, second);

// approch two
[first, second] = [second, first];
console.log(first, second);