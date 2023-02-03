function isEven(number) {
    const module = number % 2;
    if (module===0) {
        /* console.log("সংখ্যাটি একটি জোড় সংখ্যা");*/
        return true;
    }
    else {
        /*console.log("সংখ্যাটি একটি বিজোড় সংখ্যা");*/
        return false;
   }
}
// isEven(53);
const myNumberIsEven = isEven(352);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(403);
console.log(herNumberIsEven);