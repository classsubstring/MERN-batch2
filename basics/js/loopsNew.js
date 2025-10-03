const arr1 = [10, 20, 30, 40, 50];
let sum = 0;

let total = arr1.map((num) => (sum += num));

console.log(total);

// for (const element in arr1) {
//   console.log(element);
// }
console.log(typeof arr1);
