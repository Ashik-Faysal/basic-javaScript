var numbers = [12, 52, 68, 96, 35, 45, 75, 69];
for (i = 0; i < numbers.length; i++) {
  number = numbers[i];
  if (number > 50) {
    continue; // skip kora bojhai...
  }
  console.log(number);
}
