const express = require("express");
const app = express();
//서버 setting => 순서 상관없음
app.listen(8484);

app.get("/test", function (req, res) {
  //   res.send("test");
  res.json({ say: "test" });
});
app.get("/test/1", function (req, res) {
  res.send("one");
});
