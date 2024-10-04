const person = {
  name: "Jack;",
  greet() {
    console.log(`My name is ${this.name}`);
  },
};

person.greet();

const otherPerson = person.greet;
otherPerson();

const boundGreet = person.greet.bind({ name: "kane" });
boundGreet();

// call & Apply : have to research in my own
