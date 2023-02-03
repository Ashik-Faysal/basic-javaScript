function getOddNumbersOfAnArray(numbers){ 
    const oddNumbers= [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            // console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumber = [5, 7, 8, 10, 45, 30];
const oddNumbers = getOddNumbersOfAnArray(myNumber);
console.log(oddNumbers);