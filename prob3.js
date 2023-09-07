// 3. Question: Convert the first letter of each word in a sentence to uppercase.

let sentence = `string concatenation can be performed by using addition symbol`;
let words = sentence.split(" ");
let sent = "";
for (let i=0; i<words.length; i++){
    sent += words[i][0].toUpperCase() + words[i].substr(1) + " " ;
}
console.log(sent);