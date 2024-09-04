function add1(x, y) {
  return x + y;
}
//js여서 모듈화할려고 사용
let add2 = function (x, y) {
  return x + y;
};
//arrow function
const add3 = (x, y) => {
  return x + y;
};
//arrow function return 축약
var add4 = (x, y) => x + y; //return 축약
console.log(add1(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));
