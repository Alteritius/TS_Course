class SuperUser {
  protected _firstName: string = "";
  private _lastName: string = "";
  //   constructor(private firstName: string, private lastName: string) {}

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name.");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
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
  constructor(public jobTitle: string) {
    super(); //if SuperUser had a constructor and got any parameters, u would have to pass them here...
    // super.firstName = 'Max'
  }
  work() {
    //...
    console.log(this._firstName);
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    //logic to duplicate the UI element
  }
}

// let UIElement = new UIElement();

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }

  //...
}
