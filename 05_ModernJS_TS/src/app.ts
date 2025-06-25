// Code goes here!

// const userName = "Max";
// // userName = "Maximilian";
// let age = 30;

// age = 29;

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number) => {
//   return a + b;
// };

// const add = (a: number, b: number = 3) => a + b;

// console.log(add(2));

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1, hobby2, hobbies);

const { firstName: userName, age } = person;

console.log(userName, age);
