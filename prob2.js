// 2. Question: Count the number of vowels in a given string.

let str = "deed";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for(let i=0; i<str.length; i++){
    if (vowels.indexOf(str[i]) >= 0){
        count += 1;
    }
}
console.log(count);