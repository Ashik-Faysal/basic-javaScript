/* 
1. show output from 1-50
2.if the number is divisible by 3 then instead of the number show "foo"
3.if the number is divisible by 5 then instead of the number show "bar"
4.if the number is divisible by both 5 & 3 then instead of the number show "foobar"
*/
for (i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FooBar");
    }
    else if (i % 3 === 0) {
        console.log("Foo");
    }
    else if ( i % 5 === 0) {
        console.log("Bar");
    }
    else {
        console.log(i);
    }
}
