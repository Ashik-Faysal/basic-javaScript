/*Write a function called foo() and a function called bar() which prints "bar". Call function bar() in the foo() function after printing . What will be the output? Now call the foo() to see the output. */

function foo() {
    bar();
    console.log("foo");
}
function bar() {
    console.log("bar");
}
foo();