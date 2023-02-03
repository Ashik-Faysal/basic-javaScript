/*You are given an array :  var fruits=['apple', 'banana', 'orange'] 
a. fint the index of 'banana' and replace "banana " with 'mango'.
b. remove 'orange' and add 'watermelon'.
----------------------------------------------------------------*/

var fruits = ['Apple', 'Banana', 'Orange'];
var indexBanana = fruits.indexOf('Orange');
console.log(indexBanana);
fruits[1] = 'Mango';// element add korte kaje lagge.
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon')
console.log(fruits);
