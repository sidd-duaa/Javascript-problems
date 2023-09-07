// 5. Question: Find the sum of all positive numbers in an array.

let num = [2, 6, 1, 0, 8];
let sum = 0;
for(let i=0; i<num.length; i++){
    if (num[i] >= 0){
        sum += num[i];
    }
}
console.log(sum);