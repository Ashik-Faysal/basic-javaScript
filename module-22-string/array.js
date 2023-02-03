function getEvenArray(Number){
  const evenNumber = [];
  for (let i = 0; i < Number.length; i++){
    const index = i;
    const element = Number[index];
    if (element % 2 === 0) {
      evenNumber.push(element);
    }
  }
  return evenNumber;
}
const myArray = [35, 156, 152, 14, 24, 185, 41, 547, 54, 147, 845, 654, 77, 8, 475, 51, 6358, 84];
const evenNumbers = getEvenArray(myArray);
console.log(evenNumbers);