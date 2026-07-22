"use strict";
//prime numbers 1,2,3,5,7,11,13 etc
let num = 100;
const limit = 50;
if (num == 1) {
    console.log("its a prime");
}
else if (num % 2 == 0) {
    console.log("not a mrime number");
}
else {
    console.log("prime number");
}
for (let i = 0; i < limit; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}
