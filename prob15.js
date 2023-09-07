// 15. Question: Determine if a year is a leap year or not.

const year = 2024; // Replace with the year you want to check

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
