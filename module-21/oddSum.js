/* Write a function findOddSum() that will take the array [5,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers . */

function getSumOfArray(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const myNumber = [5, 7, 8, 10, 45, 30];
getSumOfArray(myNumber);