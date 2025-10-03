//let , const

// var name = "shruti";

// function name(params) {
//   var name;
// }

//template literals

// console.log(` Hello i am ${name}`);

//default parameters

export function greet(name) {
  name = name || "Guest";
  console.log(`Hello ${name}`);
}

// greet();

//arrow function

const fun = () => {
  console.log("this is an arrow function");
};

// fun();

//destructuring

// const students = { name: "Shruti", age: 20, courses: "MERN", batch: "MERN" };
// const { name, age, courses, batch } = students; //=> destructuring
// console.log(students.batch);
// console.log(age);

const arr = [10, 20, 30, 40];
const [a, b, c, d] = arr;

// console.log(c);

//spread and rest operator (...obj, ...rest)
//spread operator is used to spread values  ===>unpack
//rest operator is used to collect values ===> pack

// const newObj = { ...students, state: "NY", city: "Lucknow" };

// console.log(newObj);

const fruits = ["orange", "apple", "banana", "kiwi"];
const myFavFruits = ["mango", ...fruits, "grapes"];

// console.log(myFavFruits);

// const { stream, ...detail } = course;

// console.log(detail);

//Enhanced Object literals

const userName = "Abhishek";

const instaDetails = { userName, age: 30 };
// console.log(instaDetails);

//for of

for (const fruit of fruits) {
  // console.log(fruit);
}

// for (const element of course) {
//   console.log(element);
// }

// for (const key in course) {
//   console.log(key);
//   console.log(course[key]);
// }

// const course = {
//   stream: "CS",
//   duration: 4,
//   subject: "Computer science subjects",
//   teachers: ["teacher A", "Teacher B"],
// };

// console.log(course.stream);

//spread and rest operator

const user = {
  userN: "Shruti",
  course: ["js", "c"],
  userId: 123445,
  rollNo: 9088,
};

// const { userN, course, userId, rollNo } = user;

//...user==> spread
//...detail==>rest
const newUserObj = { age: 30, ...user, role: "admin" };
// console.log(newUserObj);

const { userN, ...detail } = user;
// console.log(detail);

let student1 = {
  name: "Abhishek",
  rollNo: "12234",
  email: "abc@gmail.com",
  mobileNumber: "983998764",
};

let student2 = student1;
let student3 = { ...student1 };

student2.rollNo = "0469";

student3.rollNo = "ABC";

console.log(student1);
console.log("----------------------");
console.log(student2);
console.log("------------------------");
console.log(student3);


if (true) {

  function greet(userName) {
    //logic
    
  }
  
}