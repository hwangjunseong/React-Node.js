const express = require("express");
const app = express();
//서버 setting => 순서 상관없음
app.listen(8484);

app.get("/products/:productId", function (req, res) {
  //url로 매개변수를 전달해준 값이 문자열인지 숫자인지 확인

  //req.params로 들어오는 건 무조곤 string 타입으로 나오네
  //js는 문자열을 숫자처럼 바꿔줌
  //parseInt로 바꾸면 안에 있는 문자열을 숫자로 바꿔줌
  let number = parseInt(req.params.productId, 10);
  // if (req.params.productId > 10) {
  // if (req.params.productId - 10 > 5) {
  //   console.log("bigger than 10");
  // }
  //   console.log(req.params);
  //   res.json({ id: req.params.productId });
  res.json({ id: number });
});

//code runner
//ctrl alt n: 시작
//ctrl alt m : 종료

// 채널주소 :https://www.youtube.com/@kundol
// app.get("/:nickname", function (req, res) {
//   const param = req.params;

//   res.json({
//     channel: param.nickname, //문자열
//   });
// });
// 영상 클릭 주소 :https://www.youtube.com/watch?v=bxrGfZCPDhQ&list=RDbxrGfZCPDhQ&start_radio=1
//https://www.youtube.com/watch?v=Rt-CiaDHV9U&t=291s
app.get("/watch", function (req, res) {
  //watch?
  //query로 받음
  const { v, t } = req.query; //객체의 비구조화
  //   const query = req.query;
  //   console.log(query);
  //   console.log(query.v);
  //   console.log(query.t);

  //   res.json(query);
  // res.json({
  //   channel: param.nickname, //문자열
  // });
  //   res.json({
  //     video: query.v, //문자열
  //     timeline: query.t,
  //   });
  res.json({
    video: v, //문자열
    timeline: t,
  });
});
