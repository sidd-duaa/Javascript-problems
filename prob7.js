// 7. Question: Remove all duplicates from an array without built-in methods.

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];

for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
}
console.log(uniqueArray); 