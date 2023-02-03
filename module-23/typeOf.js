const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11 ,name: "Fagun" };
const friends = [13, 14, 13, 21, 25, 10, 28];
function add(num1, num2) {
    return num1 + num2;
};
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//cheack array using array.isArray.
console.log(Array.isArray(friends));
console.log(typeof add);

//---এরের ভিতরে এলিমেন্ট থাকলে ট্রু আর না থাকলে ফলস দেখাবে---
console.log(friends.includes(20));
console.log(friends.includes(13));

if (friends.includes(252) !== -1) {
    
}

//--------------Concat---------------------------
const newArray = [33, 18, 19, 30];
const allFriends = newArray.concat(friends);
console.log(allFriends);

