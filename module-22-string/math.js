const mathPow = Math.pow(2, 8);
console.log(mathPow);
const num1 = 35; 
const num2 = 70;
const gap = Math.abs(num1 - num2);
// console.log(gap);
if (gap < 10) {
    console.log("You guys can be friends");
}
else {
    console.log("You guys apart ");
}

// MathRound ৫ এর ছোট হলে আগের সংখ্যা আর বড় হলে পরের সংখ্যা।
const number = 3.1416;
const fullNumber = Math.round(number);
// console.log(fullNumber);

// MathFlore দশমিক এর পরে যেটাই থাক না কেন এক্ষেত্রে সব সময় আগের সংখ্যা টায় ন্নিবে।
const result1 = 2.652;
console.log(Math.floor(result1));

// দশমিক এর পরে যেটাই থাক না কেন এক্ষেত্রে সব সময় পরের সংখ্যা টায় নিবে।
const result2 = 2.652;
console.log(Math.ceil(result2));

// MathRandom  রেন্ডম নাম্বার জেনারেট করার জন্যে। এই মেথড মূলত কোনো আর্গুমেন্ট নেয় না। তবে এটা শুধুমাত্র ০ থেকে ১ এর ভিতরে যেকোনো নাম্বার আউটপুট দেয়। মানে জাস্ট রেন্ডম নাম্বার জেনারেট করে।
console.log(Math.random());
// ludu
const chokka = Math.round(Math.random() * 6);
console.log(chokka);