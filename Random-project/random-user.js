const express = require("express");
const app = express();
app.get("/fake/users/:id", function (req, res) {
  const userId = req.params.id;
  res.status(200).json({
    userId: users[userId].userId,
    username: users[userId].username,
    fullname: users[userId].fullname,
    phonenumber: users[userId].phonenumber,
    email: users[userId].email,
    avatar: users[userId].avatar,
    password: users[userId].password,
  });
});
app.get("/fake/users", function (req, res) {
  const { num } = req.query;
  //num만큼 유저 생성
  let idx = 1;
  let users = [];
  while (idx <= num) {
    users.push({
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      fullname: faker.person.fullName(),
      phonenumber: faker.phone.number(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    });
    idx++;
  }
  res.status(200).json(users);
});
const { faker } = require("@faker-js/faker");
//랜덤 데이터 생성
function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    fullname: faker.person.fullName(),
    phonenumber: faker.phone.number(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
console.log(users);
app.listen(5555);
