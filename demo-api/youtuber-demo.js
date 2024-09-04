//express 모듈 세팅
const express = require("express");
const app = express();
app.listen(8484);
app.use(express.json());
app.get("/", function (req, res) {
  res.send("hello");
});
//REST API 설계
app.get("/youtuber/:id", function (req, res) {
  let { id } = req.params;
  console.log(id);
  id = parseInt(id, 10);
  //youtuber 객체 꺼내옴
  let youtuber = db.get(id);
  if (youtuber == undefined) {
    res.json({
      message: "cannot find youtuber inf",
    });
  } else {
    res.json(youtuber);
  }
});
app.post("/youtuber", (req, res) => {
  //   console.log(req.body);

  //db에 동일한 userId를 가진 사람이 있는지 확인하고 없다면 넣음
  if (db.get(id) == undefined) {
    //js객체가 생긴 모양인 json 형태로 넣어줘도됨
    db.set(id, req.body);
    console.log(db);
    res.json({
      message: `${db.get(id++).channelTitle}님 , 유튜버 생활을 응원합니다`,
    });
  } else {
    res.json({ message: "this userId already exists" });
  }
});
app.get("/youtubers", (req, res) => {
  //map이 key:value =>json과 비슷
  //db가 이미 json과 비슷
  //   Map(3) {
  //     1 => { channelTitle: '15ya', subScriber: '593만명', videoNum: '993개' },
  //     2 => { channelTitle: '침착맨', subScriber: '227만명', videoNum: '6.6천개' },
  //     3 => { channelTitle: '큰돌의던전', subScriber: '2.06만명', videoNum: '219개' }
  //   }
  //   {
  //     '1': { channelTitle: '15ya', subScriber: '593만명', videoNum: '993개' },
  //     '2': { channelTitle: '침착맨', subScriber: '227만명', videoNum: '6.6천개' },
  //     '3': { channelTitle: '큰돌의던전', subScriber: '2.06만명', videoNum: '219개' }
  //   }
  const obj = Object.fromEntries(db);
  console.log(obj);
  res.send(obj);
});
//데이터 setting
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
let db = new Map();
//함수레벨 스코프
var id = 1;
db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);
console.log("id: " + id);
console.log(db);

//app.post
//json으로 아래와같은 형식으로 보냈을 때
//   {
//     "userId": 4
//     "channelTitle" :"dandyhwang",
//     "subScriber" :  0,
//     "videoNum" : 0
// }
//   let { userId, channelTitle, subScriber, videoNum } = req.body;
//   console.log(userId, channelTitle, subScriber, videoNum);
//number string string string
//   console.log(
//     typeof userId,
//     typeof channelTitle,
//     typeof subScriber,
//     typeof videoNum
//   );
//   let newUser = req.body;
//   let userId = newUser.userId;
//   delete newUser.userId;
