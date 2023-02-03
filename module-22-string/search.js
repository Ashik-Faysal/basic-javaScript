const lyrics = "Tumi bondhu kala pakhi ami jeno ki . bosonto kale tomai bolte parini. Sada sada kala kala . rong jomeche sada kala. hoiechi ami mon pagela bosonto kale.";

//  কোনো কিছু সার্চ করার জন্য ইঙ্কুল্ড ব্যবহার করা হয়। সার্চ করা এলিমেন্ট টা যদি ভিতরে থাকে তবে ট্রু দেখাবে না থাকে ফলস দেখাবে।
const doesExist = lyrics.includes("sada");
console.log(doesExist);

// -------------------------------------
const position = lyrics.indexOf("pagela");
console.log(position);
/*---------------------------------
আপনার কাঙ্ক্ষিত স্ট্রিং নির্দিষ্ট কোনো ক্যারেক্টার বা ক্যারেক্টার সেট দিয়ে শুরু হয়েছে কিনা সেটা দেখতেই এই মেথড ইউজ হয়। এটা সবসময় Boolean ভ্যালু true অথবা false রিটার্ন করেঃ*/
// startwith
const startWith = lyrics.startsWith("Tumi")
console.log(startWith);
// endWith
const end = lyrics.endsWith("kale.");
console.log(end);