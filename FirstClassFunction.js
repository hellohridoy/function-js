//For FirstClass Function

// A Function Can be stored in variable   =>passed

function sayName(name) {
  return "Hi " + name;
}
let myName = sayName;
let myNewName = myName;
console.log(myNewName("hridoy"));

// A Function can be stored in array

const array = [1, 2, 3, 4];
array.push(myNewName);
console.log(array);

//A Function can be stored in object as a property

const person = {
  name: "Hridoy",
  myName: myName,
  print: function () {
    console.log("hi");
  },
};
console.log(person);

// We can create Function as we needed  =>passed

let number =
  10 +
  (function () {
    return 50;
  })(); // self ivoking function
console.log(number);

//We can pass function as an arguments  => passed

function hridoy(name, fun) {
  return fun(name);
}

let result = hridoy("Hridoy Hossain", myNewName);
console.log(result);

// we can return function from another function
function base(b) {
  return function (n) {
    let rslt = 1;
    for (let i = 0; i < b; i++) {
      rslt *= n;
    }
    return rslt;
  };
}
// let power = base(2);
// let rslt = power(5);
var rslt = base(3)(5);
console.log(rslt);
