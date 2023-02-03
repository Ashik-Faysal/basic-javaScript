// Formula: fibo[n] = fibo[n - 1] + fibo[n - 2];
const fibo = [0, 1];
for (i = 2; i <= 15; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2]; 
}
console.log(fibo);

/* ফিবো এর মান সব সময় তিন নম্বার টা থে কে নিতে হয় ...।
আগের দুইটার যোগফল হচ্ছে নতুন টা, তাই যদি আগে দুইটা না নেই তবে নতুন টা কোথায়হ থেকে পাবো।
*/