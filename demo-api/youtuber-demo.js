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
    res.status(404).json({
      message: "cannot find youtuber inf",
    });
  } else {
    res.status(200).json(youtuber);
  }
});
app.post("/youtuber", (req, res) => {
  //   console.log(req.body);
  //body 있는지 확인해줘야함 => 유효성 검사
  const channelTitle = req.body.channelTitle;

  //db에 동일한 userId를 가진 사람이 있는지 확인하고 없다면 넣음
  //   if (db.get(id) == undefined) {}
  if (channelTitle) {
    //이전에 삭제된 id가 있는지 검사
    if (pq.size == 0) {
      db.set(id, req.body);
      res.status(201).json({
        message: `${db.get(id++).channelTitle}님 , 유튜버 생활을 응원합니다`,
      });
    } else {
      let pqid = pq.shift();
      db.set(pqid, req.body);
      res.status(201).json({
        message: `${db.get(pqid).channelTitle}님 , 유튜버 생활을 응원합니다`,
      });
    }
    // db.set(id, req.body);
    // console.log(db);
  } else {
    //클라이언트의 요청이 잘못됨 => 400
    // res.status(400).json({ message: "this userId already exists" });
    res.status(400).json({ message: "요청을 제대로 보내주세요" });
  }
});

app.get("/youtubers", (req, res) => {
  let youtubers = {};

  if (db.size !== 0) {
    db.forEach(function (value, key) {
      youtubers[key] = value;
    });
    res.status(200).json(youtubers);
  } else {
    res.status(404).json({ message: "조회할 유튜버 없음" });
  }

  //map이 key:value =>json과 비슷
  //db가 이미 json과 비슷
  //forEach문 : index 값 없이 사용, 배열

  //   db.forEach(function (youtuber) {
  //     console.log(youtuber);

  //   });

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
  //   const obj = Object.fromEntries(db);
  //   console.log(obj);
  //   res.send(obj);
});
//app.get은 path:Route
//express가 string으로 받아서 객체로 들어가게 하는듯
//path:string
app.delete("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const youtuber = db.get(id);
  //db에 해당 id를 가진 유저가 있는지 확인
  if (youtuber) {
    db.delete(id);
    pq.insert(id);
    res
      .status(200)
      .json({ message: `${youtuber.channelTitle}님 정보가 삭제되었습니다` });
  } else {
    // console.log("존재하지 않는 id");
    res.status(404).json({
      message: `${id} id를 가진 user 정보가 존재하지 않습니다`,
    });
  }
});
app.delete("/youtubers", (req, res) => {
  //db.clear할게 있는지 확인 => db의 값이 1개이상이면 전체 삭제
  //   db. 눌렀을 때
  //   정육면체 => 함수,메서드
  //   직육면체 =>변수,field, js에서는 프로퍼티라고 부름
  if (db.size >= 1) {
    db.clear();
    id = 1;
    res.status(200).json({ message: "전체 유튜버가 삭제되었습니다" });
  } else {
    res.status(404).json({ message: "삭제할 유튜버가 없습니다" });
  }

  //   db.map(function (value, key) {
  //     db.delete(key);
  //   });
});
app.put("/youtubers/:id", (req, res) => {
  let id = req.params.id;
  let channelTitle = req.body.channelTitle;
  id = parseInt(id);
  let youtuber = db.get(id);
  if (youtuber != undefined) {
    //이전 유튜버 정보
    let prevChannelTitle = youtuber.channelTitle;
    youtuber.channelTitle = channelTitle;
    // console.log(db);
    db.set(id, youtuber);
    // console.log(db);

    res.status(200).json({
      message: `${prevChannelTitle}님 , 채널명이 ${youtuber.channelTitle}로 변경되었습니다`,
    });
  } else {
    res.status(404).json({ message: `해당 ${id}을 가진 유저가 없습니다` });
  }
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
const db = new Map();
//함수레벨 스코프
let id = 1;
db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);
console.log("id: " + id);
console.log(db);
class PriorityQueue {
  constructor() {
    this.heap = new Array(64);
    this.size = 0;
  }

  insert(value) {
    const heap = this.heap;
    const size = ++this.size;

    if (size === heap.length) heap.length *= 2;

    heap[size] = value;
    this.percolateUp();
  }

  percolateUp() {
    const heap = this.heap;
    const size = this.size;

    let pos = size;
    const item = heap[pos];

    while (pos > 1) {
      const parent = heap[Math.floor(pos / 2)];
      if (parent <= item) break;
      heap[pos] = parent;
      pos = Math.floor(pos / 2);
    }

    heap[pos] = item;
  }

  shift() {
    const heap = this.heap;
    const value = heap[1];
    if (value === undefined) return undefined;
    const size = --this.size;

    heap[1] = heap[size + 1];
    heap[size + 1] = undefined;
    this.percolateDown();
    return value;
  }

  percolateDown() {
    const heap = this.heap;
    const size = this.size;

    let pos = 1;
    const item = heap[pos];

    while (pos * 2 <= size) {
      let childIndex = pos * 2 + 1;
      if (childIndex > size || heap[pos * 2] < heap[childIndex])
        childIndex = pos * 2;
      const child = heap[childIndex];
      if (item <= child) break;
      heap[pos] = child;
      pos = childIndex;
    }

    heap[pos] = item;
  }
}
const pq = new PriorityQueue();
console.log(pq);
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
