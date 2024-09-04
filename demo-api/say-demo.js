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
