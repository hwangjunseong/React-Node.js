// let book = {
//   title: "Node.js",

//   price: 20000,

//   description: "book detail",

//   //   user_id: `${req.params.productId}`,
// };
// function print(book) {
//   console.log(book.title, book.price, book.description);
// }
// // console.log(book.title, book.price, book.description);
// print(book);

let obj = {}; // new Object()와 동일

if (obj.constructor === Object) {
  console.log("obj는 Object 생성자로 만들어진 객체입니다.");
}

let arr = []; // 배열
let num = 123; // 숫자
let date = new Date(); // Date 객체

console.log(arr.constructor === Object); // false (배열은 Array 생성자로 생성됨)
console.log(num.constructor === Object); // false (숫자는 Number 생성자로 생성됨)
console.log(date.constructor === Object); // false (Date 생성자로 생성됨)
