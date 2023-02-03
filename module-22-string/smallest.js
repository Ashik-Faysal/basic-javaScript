function smallInArray(numbers) {
  let small = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element < small) {
      small = element;
    }
  }
  return small;
}

const height = [165, 198, 206, 185, 175, 153, 176, 191];
const small = smallInArray(height);
console.log("Tallest person is :", small);
