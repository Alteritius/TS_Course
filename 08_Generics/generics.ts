let names: Array<string> = ["Max", "Anna"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Max";
store.isInstructor = true;

let nameStore: DataStore<string> = {};

function merge<T, S>(a: T, b: S) {
  return [a, b];
}

const ids = merge(1, "bro");

//...

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: "Max" }, { age: 35 });

interface Role<T> {
  role: T;
}

class User<T> {
  constructor(public id: T) {}
}

const user = new User(1);
