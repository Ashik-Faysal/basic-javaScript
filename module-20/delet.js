// It's work for only object

const person = {
    fName: "Ashik",
    lName: "Faysal",
    age: 26,
    country : "Bangladesh"
}
// console.log(person);
// properties = Object.keys(person);
// console.log(properties);
// pValues = Object.values(person);
// console.log(pValues);
delete person.country;
console.log(person);
