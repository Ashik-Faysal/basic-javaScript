const reverseMaker = (word) => {
  //Write Your solution Here
  const reverseWords = word.split("").reverse().join("");
  return reverseWords;
};
const reverse = reverseMaker("Bangladesh");
console.log(reverse);
