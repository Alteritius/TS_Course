"use strict";
class AuthenticatableUser {
    email;
    password;
    userName;
    constructor(email, password, userName) {
        this.email = email;
        this.password = password;
        this.userName = userName;
    }
    login() {
        //...
    }
    logout() {
        //...
    }
}
//...
function authenticate(user) {
    user.login();
}
let user;
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
