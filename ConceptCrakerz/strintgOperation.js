function stringCombine(str1, str2) {
  //write your code here
  //don't forget to write return
    const stringJoin = (str1 + " " + str2);
    return stringJoin;
}
const line1 = "I am going to be";
const line2 = "an awesome web developer";
const addedLine = stringCombine(line1, line2)
console.log(addedLine);
