interface Authenticatable {
  // only descrivbe object type, not an implementation,
  email: string;
  password: string;
  //   role: string;

  login(): void;
  logout(): void;
}

// interface Authenticatable {
//   role: string;
// }

interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public userName: string
  ) {}

  login() {
    //...
  }
  logout() {
    //...
  }
}

//...

function authenticate(user: Authenticatable) {
  user.login();
}

let user: Authenticatable;

user = {
  email: "test@example.com",
  password: "abc1",
  //   role: "guest",
  login() {
    // reach out to db and check credentials, create a session
  },
  logout() {
    // clear a session
  },
};
