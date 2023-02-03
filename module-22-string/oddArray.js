function getOddArrry(numbers) {
    const oddArray = [];
    for (i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddArray.push(element);
        }
    }
    return oddArray;
}
const myArray = [
  35, 156, 152, 14, 24, 185, 41, 547, 54, 147, 845, 654, 77, 8, 475, 51, 6358,
  84,
];
const oddNumbers = getOddArrry(myArray);
console.log(oddNumbers);