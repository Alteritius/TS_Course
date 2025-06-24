// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

// let userRole: Role = Role.Admin; // 0 => Admin, 1 => Guest

// ...

// userRole = Role.Guest;

// alternative

type Role = "admin" | "editor" | "guest" | "reader";
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: Role = "guest";

userRole = "admin";

// previous tuple

let possibleResult: [1 | -1, 1 | -1]; // [1, -1]

possibleResult = [1, -1];

function access(role: Role) {
  //...
}
