const students = ["Aman", "Ankit", "Sumit", "Ravi", "Rahul"];

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < students.length; index++) {
//   console.log(students[index]);
// }

let index = 0;

// while (index < students.length) {
//   console.log(students[index]);
//   index++;
// }

// do {
//   console.log(students[index]);
//   index++;
// } while (index < students.length);

//for in and for of loop

for (let index in students) {
  console.log(students[index]);
}

for (let i in num) {
  if (i == 6) {
    continue;
  }
  console.log(2 * num[i]);

  console.log("----");
}
