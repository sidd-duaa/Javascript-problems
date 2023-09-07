// 14. Question: Find the maximum of three numbers using nested ternary operators.

const num1 = 9;
const num2 = 7;
const num3 = 2;

const max = num1 >= num2 ? (num1 >= num3 ? num1 : num3) : (num2 >= num3 ? num2 : num3);

console.log(`The maximum number is: ${max}`);
