//Arithmetic + - * / % **

let a = 0;
let b = 2;
name = "Abhishek";
course = "MERN";
// console.log(a + b); // Addition
// console.log(a / 0);

// console.log("Hello" + 5);

//Assignment operators =,+=,-+,*=.....

//Comparison operators ==,===,!=.!==,>,<,>=,<=

// console.log(a >= b);

//logical operators &&,||,!

console.log(!a);

// console.log(a && 0 && b);

//Ternery operator

console.log(a ? "true" : "false");

//Bitwise Operators &,|,^,~,<<,>>

console.log(a & b); //0000&0010=0000

console.log(a + b * 10);

console.log(NaN == NaN);

if (a > 10) {
  console.log("entered if block");
} else if (a < 10) {
  console.log("entered else if block");
} else {
  console.log("entered else block");
}

if (name == "Abhishek") {
  if (course == "MERN") {
    console.log("Hello Abhishek, welcome to the batch");
  }
}

switch (course) {
  case "MERN":
    console.log("Wecome to MERN batch");
  case "C":
    console.log("Wecome to C batch");
  // break;
  case "Python":
    console.log("Wecome to java batch");
  // break;
  case "java":
    console.log("Wecome to java batch");

  default:
    console.log("running default");

    break;
}


