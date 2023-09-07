// 12. Question: Loop through an array using a for-of loop and double each element.

const myArray = [1, 2, 3, 4, 5];
const doubledArray = [];

for (const element of myArray) {
  const doubledElement = element * 2;
  doubledArray.push(doubledElement);
}

console.log(doubledArray);
