// 4. Question: Check if a string is a palindrome.

let str = "deed";
let revStr = "";

for (let i=(str.length)-1; i>=0; i--){
    revStr += str[i];
}

if (str == revStr){
    console.log("The String is a Palindrome");
}
else{
    console.log("The String is not a Palindrome");
}