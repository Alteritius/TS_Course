// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class User {
  public readonly hobbies: string[] = [];

  constructor(public name: string, private age: number) {}

  greet() {
    console.log("My age: " + this.age);
  }
}

const max = new User("Max", 30);
const fred = new User("Fred", 35);

// max.hobbies.push("Sports");

console.log(max, fred);
