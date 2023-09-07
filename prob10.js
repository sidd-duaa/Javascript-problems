// 10. Question: Calculate the factorial of a number using a do-while loop.

let n = 5;
let result = 1;
let i = 1;

if (n < 0) {
  console.log("Undefined");
} else {
  do {
    result *= i;
    i++;
  } while (i <= n);

  console.log(`The factorial of ${n} is ${result}`);
}
