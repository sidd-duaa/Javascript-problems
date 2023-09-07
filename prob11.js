// 11. Question: Iterate through the properties of an object using a for-in loop.

const Cars = {
    name: "Corolla",
    model: "2015",
    company: "Toyota"
  };
  
  for (let car in Cars) {
    console.log(`${car}: ${Cars[car]}`);
  }
  