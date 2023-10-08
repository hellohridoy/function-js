function name(firstName, lastName, gender) {
  let result;
  if (gender === "male") {
    result = "Mr " + firstName + " " + lastName;
  } else if (gender === "female") {
    result = "Ms " + firstName + " " + lastName;
  }
  return result;
}
let fullName = name("Hridoy", "Hossain", "male");
console.log(fullName);

function example() {
  return {
    name: "Hridoy ",
    skill: ["C", "Java", "JS"],
    print: function () {
      console.log(this.name + this.skill);
    },
  };
}
let type = example();
type.print();
