function factoreal(number) {
  let num = number;
  let result = 1;
  while (num >= 1) {
      result = result * num;
      console.log(num);
    num--;
  }
  return result;
}
const number = 9;
const fact = factoreal(number);
console.log("factoreal of :", number, "!=", fact);
