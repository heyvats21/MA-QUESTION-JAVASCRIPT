// 1.Given an array of numbers, write a function that returns the sum of all the even numbers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const sumEven = numbers.reduce(
//   (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
//   0
// );

// console.log(sumEven);

// 2.Given an array of strings, write a function that returns the total number of characters in all the strings that start with the letter "A".

// const strings = ["Apple", "Aardvark", "Banana", "Cat"];

// const totalCharA = strings.reduce(
//   (acc, curr) => (curr.startsWith("A") ? acc + curr.length : acc),
//   0
// );

// console.log(totalCharA);

// 3.Print names of the students whose grades are greater than or equal to 90.

// const students = [
//   { name: "Quincy", grade: 96 },
//   { name: "Jason", grade: 84 },
//   { name: "Alexis", grade: 100 },
//   { name: "Sam", grade: 65 },
//   { name: "Katie", grade: 90 }
// ];

// const gradesGreater = students
//   .filter(({ grade }) => grade >= 90)
//   .map(({ name }) => name);

// console.log(gradesGreater);

// 4.Problem Statement: We are interested in retrieving only the name of the students and all the names should be in caps.

// const studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 }
// ];

// const capsName = studentRecords.map(({ name }) => name.toUpperCase());

// const marksGreaterThen = studentRecords
//   .filter(({ marks }) => marks > 50)
//   .map(({ name }) => name.toUpperCase());

// console.log(marksGreaterThen);
// console.log(capsName);

// 5.Write a function that takes an array and returns all the numbers in a new array increased by 10.

// const arr = [2, 4, 6, 8, 10];
// const increasedArray = arr.map((array) => array + 10);

// console.log(increasedArray);

// 6. Write a arrow function which takes an object and prints the particular sentence

// // My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board.

// const obj = {
//   name: "Ankit Singhania",
//   school: {
//     board: ["ISC"],
//     marks: [
//       {
//         subject: "Math",
//         percent: 99
//       },
//       {
//         subject: "Computer",
//         percent: 96
//       }
//     ]
//   }
// };

// console.log(
//   `My name is  ${obj.name}. I scored ${obj.school.marks[0].percent} in Math and ${obj.school.marks[1].percent} in Computer from ${obj.school.board} board `
// );

// var members = [
//   {
//     id: 111,
//     name: "Chelsea Foster",
//     workExp: 7,
//     deptExp: 6,
//     isPermanent: true
//   },
//   {
//     id: 102,
//     name: "Aggie Sparling",
//     workExp: 13,
//     deptExp: 10,
//     isPermanent: false
//   },
//   {
//     id: 123,
//     name: "Timmy Matthews",
//     workExp: 23,
//     deptExp: 15,
//     isPermanent: false
//   },
//   {
//     id: 66,
//     name: "Emmet Foster",
//     workExp: 22,
//     deptExp: 9,
//     isPermanent: true
//   },
//   {
//     id: 89,
//     name: "Brent Dolan",
//     workExp: 16,
//     deptExp: 12,
//     isPermanent: true
//   }
// ];
// ****************************************************************************************************//
// Find the sum of all members workExp sum who are permanent (isPermenant)?
// ****************************************************************************************************//

// const sumMembers = members
//   .filter(({ isPermanent }) => isPermanent === true)
//   .reduce((acc, { deptExp }) => acc + deptExp, 0);
// console.log(sumMembers);

// ****************************************************************************************************//
// Find the total score of employees who are permanent? score = workExp + deptExp
// ****************************************************************************************************//

// Method 1
// const totalScore = members.map((item) =>
//   item.isPermanent === true ? item.workExp + item.deptExp : " "
// );
// const totalScore = members
//   .filter((item) => item.isPermanent === true)
//   .reduce((acc, { workExp, deptExp }) => (acc = acc + workExp + deptExp), 0);

// console.log(totalScore);

// METHOD 2
// const totalScore = members.reduce(
//   (acc, { workExp, deptExp, isPermanent }) =>
//     isPermanent === true ? (acc = acc + deptExp + workExp) : acc,
//   0
// );

// console.log(totalScore);

// Find the sum of all members workExp sum who are permanent (isPermenant)?

// const sumMembers = members.reduce(
//   (acc, { workExp, isPermanent }) =>
//     isPermanent === true ? (acc = acc + workExp) : acc,
//   0
// );

// console.log(sumMembers);
// let employees = [
//   {
//     id: 11,
//     name: "Abhinav",
//     salary: 75000
//   },
//   {
//     id: 2131,
//     name: "Gaurav",
//     salary: 62000
//   },
//   {
//     id: 3012,
//     name: "Raj",
//     salary: 32000
//   },
//   {
//     id: 3014,
//     name: "Abhi",
//     salary: 48000
//   }
// ];

// 1.Find the total salary of employees?

// const totalSalary = employees.reduce((acc, { salary }) => (acc += salary), 0);
// const averageSalary = totalSalary / employees.length;

// console.log(totalSalary);

//2. Find all the employee names who earn more than the average salary?
// METHOD 1
// const empName = employees
//   .filter(({ name, salary }) => salary > averageSalary)
//   .map(({ name }) => name);

// console.log(empName);

// const average =
//   employees.reduce((acc, curr) => (acc = acc + curr.salary), 0) /
//   employees.length;

// const empName = employees.reduce(
//   (acc, curr) => (curr.salary > average ? [...acc, curr.name] : acc),
//   []
// );

// console.log(empName);

// let employees = [
//   {
//     id: 11,
//     name: "Abhinav",
//     salary: 75000
//   },
//   {
//     id: 2131,
//     name: "Gaurav",
//     salary: 62000
//   },
//   {
//     id: 3012,
//     name: "Raj",
//     salary: 32000
//   },
//   {
//     id: 3014,
//     name: "Abhi",
//     salary: 48000
//   }
// ];
// // 1.Find the total salary of employees?
// const totalSalary = employees.reduce(
//   (acc, { salary }) => (acc = acc + salary),
//   0
// );
// console.log(totalSalary);

// 2.Find all the employee names who earn more than the average salary?

// const averageSalary =
//   employees.reduce((acc, { salary }) => (acc = acc + salary), 0) /
//   employees.length;

// // console.log(averageSalary);

// const empName = employees.reduce(
//   (acc, { name, salary }) => (salary > averageSalary ? [...acc, name] : acc),
//   []
// );

// console.log(empName);

// // return all the students who’s average score is more than
// 1. 80
// 2. 90

// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "David", scores: [100, 100, 100] }
// ];

// const averageScoreMoreThan80 = students.filter((student) => {
//   const sum = student.scores.reduce((acc, curr) => acc + curr, 0);
//   const average = sum / student.scores.length;
//   return average > 80;
// });

// 1) Turn an array of numbers into a total of all the numbers

// const total = (arr) => {
//   // your code here
//   return arr.reduce((acc, curr) => acc + curr, 0);
// };

// console.log(total([1, 2, 3])); // 6

// 2) Turn an array of numbers into a long string of all those numbers.
// function stringConcat(arr) {
//   // your code here
//   return arr.reduce((acc, curr) => arr.join(""));
// }

// console.log(stringConcat([1, 2, 3])); // "123"

//3) Turn an array of voter objects into a count of how many people voted

// ******************************************************METHOD 1**********************
// function totalVotes(arr) {
//   // your code here
//   return arr.reduce((acc, { voted }) => (voted === true ? acc + 1 : acc), 0);
// }

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false }
// ];
// console.log(totalVotes(voters)); // 7

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// function shoppingSpree(arr) {
//   // your code here
//   return arr.reduce((acc, { price }) => acc + price, 0);
// }

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005

// 5) Given an array of arrays, flatten them into a single array

// function flatten(arr) {
//   // your code here
//   return arr.reduce((acc, curr) => acc.concat(...curr), []);
// }

// var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
