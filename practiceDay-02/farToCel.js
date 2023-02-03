// Farenheight to celcius 
function farToCel(farenheight) {
  const celsius = (farenheight - 32) / 1.8;
  return celsius;
}
const temp = farToCel(99);
console.log(temp);
