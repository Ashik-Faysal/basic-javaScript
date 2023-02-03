function temperatureConverter(valNum) {
  const celsius = (valNum - 32) / 1.8;
  return celsius;
}
const temp = temperatureConverter(50);
console.log(temp);
