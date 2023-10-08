function outer() {
  function inner() {
    console.log("I am Inner Function");
  }
  inner();
  console.log("I am Outer Function");
}
outer();

function add(a, b) {
  function sum() {
    return a + b;
  }
  function sub() {
    return a - b;
  }
  function mul() {
    return a * b;
  }
  function div() {
    return a / b;
  }
  return sum() + sub() + mul() + div();
}
console.log(add(5, 5));
