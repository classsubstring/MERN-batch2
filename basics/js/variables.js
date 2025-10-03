var name;
let course = "JavaScript";
age = "😂";
let num = 123445n;

let num1 = "90";

// var is function scoped, wherease let and const is block scoped

const arr1 = ["c", "c++", "java"];
arr1[1] = "python";

name = "Abhishek";
course = "MERN";

const obj = { name: "Shruti", age: 20, city: "Delhi" };
const courseArr = ["JavaScript", "React", "Node.js", "MongoDB"];
// age = 30;
// city = "Lucknow";
if (true) {
  //   let city = "Varanasi";
  var country = "India";
  //   console.log(country);
}

// console.log(country);

// console.log(name, course, age);
// console.table([name, course, age, arr1]);

function test() {
  console.log(score);
  console.log("-----------------------------------------------");
  var score = 100;
  console.log(score);
}

// test();

// console.log(typeof num);

let newNUm = Number(num1);
let newCourse = Number(course);

// console.log(typeof newNUm);

// console.log("5" + 2 -1);
// console.log(5-"2");
// console.log(true + false);
// console.log(newCourse);
{
}

function test1() {
  var ab = 10;
  if (true) {
  }
}

console.log(["$"] + ![]);

console.log(`Hello,${name}`);
