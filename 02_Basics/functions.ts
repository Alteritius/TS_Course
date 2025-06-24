// functions

function add(a: number, b: number): number {
  return a + b;
}

function log(message: string) {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

let bro = [];

function performJob(cb: (msg: string) => void) {
  ///...
  cb("bruh");
}

performJob(log);

type UserFn = {
  name: string;
  age: number;
  greet: () => string;
};

let usero: UserFn = {
  name: "MIchu",
  age: 38,
  greet() {
    console.log("Hello there");
    return this.name;
  },
};
