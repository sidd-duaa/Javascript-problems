// 1. Question: Reverse a string without using the built-in reverse() method.

let str = "siddiqui";
let revStr = "";

for (let i=(str.length)-1; i>=0; i--){
    revStr += str[i];
}
console.log(revStr);