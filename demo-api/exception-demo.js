const express = require("express");
const app = express();
//서버 setting => 순서 상관없음
app.listen(4321);
const friends = [
  { id: 1, name: "John" },
  { id: 2, name: "junseong" },
  { id: 3, name: "youenso" },
  { id: 4, name: "isaac" },
];

//api로 뿌리기
//사람 전체 조회
app.get("/friends", (req, res) => {
  res.json(friends);
});
//사람 개별 조회
app.get("/friends/:id", (req, res) => {
  let { id } = req.params;
  //frineds 배열 안에 있는 객체 중에 id 값이 params.id와 같은 객체를 찾음
  let findFriend = friends.find((f) => f.id == id);
  //인덱스를 넣은거
  //   let friend = friends[id];
  //객체중에 id가 1인거 찾음
  //array에 forEach돌림
  //find함수는 아래와 동일
  // let findFriend = "";
  // friends.forEach(function (friend) {
  //   if (friend.id == id) findFriend = friend;
  //   // findFriend = friend.id == id ? friend : "";
  // });

  //객체가 있음
  if (findFriend) {
    res.json(findFriend);
  } else {
    //http status code를 실패로 보냄
    //찾는 페이지나 찾는 리소스 없음
    res.status(404).send("전달주신 id로 저장된 과일이 없음");
  }
});
