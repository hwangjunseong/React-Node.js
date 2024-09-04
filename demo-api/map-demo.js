const express = require("express");
const app = express();
//서버 setting => 순서 상관없음
app.listen(8484);
//localhost:8484/1 => notebook
//localhost:8484/2 => cup
//localhost:8484/3 => chair

// app.get("/:num", function (req, res) {
//   let { num } = req.params;
//   //수학적 연산을 할 때에는 알아서 문자열을 숫자로 형변환해줌
//   //db.get(1)과 db.get("1")은 다름
//   //const로 선언하면 안됨
//   num = parseInt(num, 10);
//   if (db.get(num) == undefined) {
//     //undefined를 문자열로 ""처리하면 동작x
//     res.json({ message: "not found in Map" });
//   } else {
//     res.json({ id: num, productname: db.get(num) });
//   }
//   //if에 걸렸기 때문에 이미 json으로 날라갔음 즉 else 안걸면 에러발생

// });
app.get("/:id", function (req, res) {
  let { id } = req.params;
  //수학적 연산을 할 때에는 알아서 문자열을 숫자로 형변환해줌
  //db.get(1)과 db.get("1")은 다름
  //const로 선언하면 안됨
  id = parseInt(id, 10);
  //Map에 해당 key 없으면 undefined나옴
  console.log(db.get(id));
  if (db.get(id) == undefined) {
    //undefined를 문자열로 ""처리하면 동작x
    res.json({ message: "not found in Map" });
  } else {
    //js객체 데이터 추가
    product = db.get(id);
    //json에다가 데이터 추가하고싶음
    product.id = id;
    //위아래 동일
    // product["id"] = id;
    res.json(product);
    // res.json(db.get(id));
  }
});

let db = new Map();
let notebook = {
  productName: "Notebook",
  price: 200000,
};
let cup = {
  productName: "cup",
  price: 3000,
};
let chair = {
  productName: "chair",
  price: 100000,
};
let poster = {
  productName: "poster",
  price: 20000,
};
db.set(1, notebook);
db.set(2, cup);
db.set(3, chair);
db.set(4, poster);

// db.set("key", "value"); //key로 value를 찾을 수 있는 한 쌍을 저장
// db.set(1, "NoteBook");
// db.set(2, "Cup");
// db.set(3, "Chair");
// db.set("1", "name");
// db.set(2, "Cups"); //기존에 있던 value 바뀜

console.log(db);
//Map(4) { 'key' => 'value', 1 => 'NoteBook', 2 => 'Cups', 3 => 'Chair' }
//:가 아니라 맵핑을 하는 것
//value 꺼냄
console.log(db.get(1));
console.log(db.get(2));
console.log(db.get(3));
console.log(db.get(4));
