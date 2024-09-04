const express = require("express");
const app = express();
//서버 setting => 순서 상관없음
app.listen(8484);
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/hello", function (req, res) {
  //   res.send({
  //     say: "Hello",
  //   });
  res.json({ say: "Hello" });
});
app.get("/bye", function (req, res) {
  //   res.send({
  //     say: "Hello",
  //   });
  res.json({ say: "bye" });
});
app.get("/test", function (req, res) {
  //   res.send("test");
  res.json({ say: "test" });
});
app.get("/test/1", function (req, res) {
  res.send("one");
});
let book = {
  title: "Node.js",

  price: 20000,

  description: "book detail",

  //   user_id: `${req.params.productId}`,
};
app.get("/products/:productId", function (req, res) {
  res.json({ book });
  //   res.json({
  //     title: "Node.js",

  //     price: 20000,

  //     description: "book detail",

  //     user_id: `${req.params.productId}`,
  //   });
  //   res.send(`${req.params.productId}`);
  //   res.send("500"); //여러개 보내도 못봄

  //객체 지향적으로 보냄
});
//서버 setting => 순서 상관없음
// app.listen(8484);
