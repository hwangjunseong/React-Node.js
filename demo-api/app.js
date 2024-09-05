const express = require("express");
const app = express();
const port = 1235;
//json이라는 미들웨어 모듈을 사용하면 req로 날아오는 걸 json으로 받음
app.use(express.json());
app.get("/", (req, res) => {
  console.log(req.query);
  //object
  console.log(typeof req.query);
  res.send("Hello World!");
});

app.post("/test", function (req, res) {
  //body에 숨겨져서 들어온 데이터를 화면에 뿌려줌
  console.log(req.body);
  //   res.send("Hello Post!");
  res.json(req.body);
});

app.listen(port, () => {
  //port 설정하고 띄우는 callback함수
  console.log(`Example app listening on port ${port}`);
});

//node app.js
//실행하고 process 빠져나가야함
