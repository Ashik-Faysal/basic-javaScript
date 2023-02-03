function tallestFriend(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const height = [145, 198, 206, 185, 175, 176, 191];
const tallest = tallestFriend(height);
console.log("Tallest person is :", tallest);
