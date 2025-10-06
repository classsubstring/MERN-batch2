import { v4 as pintu } from "uuid";

console.log("this is start file");
const a = 40;
const b = 12;
let compName = "substring";
console.log(a, b, compName);

//generate random id:
const id = pintu();
console.log(id);
const id2 = pintu();
console.log(id2);

console.log("---------------");
for (let i = 1; i <= 10; i++) {
  console.log(pintu());
}
