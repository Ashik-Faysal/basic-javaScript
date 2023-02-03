function reverseString(text) {
    let reversed = [];
    for (let i = text.length-1; i >= 0; i--){
        const elemet = text[i];
        reversed = reversed + elemet;
        console.log(elemet, reversed);
    }
    return reversed;
}

const myString = " I am a good boy";
const reversed = reverseString(myString);
console.log("reversed output:", reversed);