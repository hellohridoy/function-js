const array = [1, 2, 3, 4, 0, -1];
function cbf(a) {
  console.log(a);
}
// array.forEach(function (a) {
//   console.log(a);
// });

array.forEach(cbf);

function caller() {
  return function (name) {
    return "Caller Calling You " + name;
  };
}
let x = caller()("Hridoy Hossain");
console.log(x);
