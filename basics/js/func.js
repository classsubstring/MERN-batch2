const userData2 = calBill("Abhishek", [200, 200, 300]);
function calBill(greet, bill) {
  let sum = 0;
  for (let index = 0; index < bill.length; index++) {
    sum += bill[index];
  }

  return sum > 500
    ? `Hello your discounted bill is ${sum - sum * 0.1}`
    : `Hello Your total bill is ${sum}`;
}

let name = "Shruti";
let bills = [100, 50, 300];

// console.log(userData);

console.log(userData2);

//condition?"":""

//function expression

// const greet = function (user) {
//   console.log(`Hello ${user}, welcome to the batch`);
// };

//arrow function
// greet("John");

const greet = (user) => {
  console.log(`Hello ${user}, welcome to the batch`);
};

//IIFE - Immediately invoked function expression

(function test(params) {
  console.log("Hello I am IIFE");
})();



