import { greet } from "./es6Features.js";

const names = ["John", "Durgesh", "Shruti", "John", "Durgesh", "Shruti"];
const num = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(names[0]);
names.push("test");

// console.log(names.slice(0, 2));
const deletedItems = names.splice(0, 1, "test");
// console.log(deletedItems);
// console.log(names);

const total = num.reduce((acc, n) => {
  return acc + n;
}, 0);

console.log(total);
greet("Abhishek");
