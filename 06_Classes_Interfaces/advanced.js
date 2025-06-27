"use strict";
class SuperUser {
    _firstName = "";
    _lastName = "";
    //   constructor(private firstName: string, private lastName: string) {}
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    static eid = "USER";
    static greet() {
        console.log("Hello!");
    }
}
console.log(SuperUser.eid);
SuperUser.greet();
const mich = new SuperUser();
mich.firstName = "Michael";
mich.lastName = "Bro";
console.log(mich.fullName);
class Employee extends SuperUser {
    jobTitle;
    constructor(jobTitle) {
        super(); //if SuperUser had a constructor and got any parameters, u would have to pass them here...
        this.jobTitle = jobTitle;
        // super.firstName = 'Max'
    }
    work() {
        //...
        console.log(this._firstName);
    }
}
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        //logic to duplicate the UI element
    }
}
// let UIElement = new UIElement();
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
