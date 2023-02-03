const lyrics =
  "Tumi bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini. Sada sada kala kala . rong jomeche sada kala. hoiechi ami mon pagela bosonto kale.";

const parts = lyrics.split(" ");
// console.log(parts);
const sentence = lyrics.split(".");
// console.log(sentence);
const partial = lyrics.slice(5, 8);
// console.log(partial);
const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines = [
  "Tumi bondhu kala pakhi ami jeno ki ",
  "Bosonto kale tomai bolte parini",
  "Sada sada kala kala ",
  "Rong jomeche sada kala",
  "Hoiechi ami mon pagela bosonto kale",
];
const newSong = lines.join(" & ");
console.log(newSong);
