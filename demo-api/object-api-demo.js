const express = require("express");
const app = express();
//서버 setting => 순서 상관없음
app.listen(8484);

//code runner
//ctrl alt n: 시작
//ctrl alt m : 종료

let youtuber1 = {
  channelTitle: "15ya",
  subScriber: "593만명",
  videoNum: "993개",
};
let youtuber2 = {
  channelTitle: "침착맨",
  subScriber: "227만명",
  videoNum: "6.6천개",
};
let youtuber3 = {
  channelTitle: "큰돌의던전",
  subScriber: "2.06만명",
  videoNum: "219개",
};

// 채널주소 :https://www.youtube.com/@kundol
app.get("/:nickname", function (req, res) {
  const { nickname } = req.params;
  if (nickname == "@15ya.fullmon") {
    res.json(youtuber1);
  } else if (nickname == "@chimchakman") {
    res.json(youtuber2);
  } else if (nickname == "@bickrock") {
    res.json(youtuber3);
  } else {
    res.json({
      message: "저희가 모르는 유튜버",
    });
  }
});
