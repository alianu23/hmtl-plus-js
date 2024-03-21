console.log("Working");

const firstName = "Saraa";

const p1 = {
  firstName: "Naraa",
  lastName: "Dorj",

  info: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const p2 = Object.create({
  firstName: "Saraa",
  lastName: "Bat",

  info: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
});

function aa() {
  console.log(this);
}

aa();

console.log("Global = ", firstName);
console.log("Object = ", p1.firstName);
console.log("Object = ", p1["firstName"]);
p1.info();

const p4 = { ...p1 };

console.log(Object.values(p1));
