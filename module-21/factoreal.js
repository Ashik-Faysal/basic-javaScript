function factoreal(number) {
  let sum = 1; // * er sathe 1 nite hoi
  for (let i = 1; i <= number; i++) {
    sum = sum * i;
    // console.log(i, sum);
  }
  return sum;
}
const result = factoreal(9);
console.log(result);
