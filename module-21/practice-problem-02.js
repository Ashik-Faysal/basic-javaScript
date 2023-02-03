/* Write a function() that will take the array [ 2023,02024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year . If a year  is a lep year insert that year in a new array return the new array and print the result. */
function leap_years(years) {
  const leap_years = [];
  for (let i = 0; i < years.length; i++) {
    if ((years[i] % 4 == 0 && years[i] % 100 != 0) || years[i] % 400 == 0) {
      leap_years.push(years[i]);
    }
  }
  return leap_years;
}

const years = [2023, 2024, 2025, 2028, 2030];
console.log(leap_years(years));
