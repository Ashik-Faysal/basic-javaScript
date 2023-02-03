// const myInches = 12;

// const myFeet = myInches / 12;
// console.log(myFeet);

// const myHeight = 70;
// const myFeets = myHeight / 12;
// console.log(myFeets);

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dadaInches = 72;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);