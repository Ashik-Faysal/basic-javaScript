/* Write a function called makeAvg () which will take an array of integer and the size of that array and return the average of those vallues. */
function makeAvg(arr, size) {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum / size;
}


const arr = [58, 60, 58];
const size = arr.length;
const avg = makeAvg(arr, size);
console.log(avg);
