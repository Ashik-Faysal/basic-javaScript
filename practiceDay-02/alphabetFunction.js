function getLetter(letter) {
    var letter = "C";
   switch (alphabet) {
     case "A":
       console.log("a, e, i, o, u");
       break;
     case "B":
       console.log("b, c, d, f, g");
       break;
     case "C":
       console.log("h, j, k, l, m");
       break;
     case "D":
       console.log("n, p, q, r, s, t, v, w, x, y, z");
       break;
     default:
       console.log("No alphabet");
   }
     return letter;
}
let findLetter = getLetter();
console.log(findLetter);