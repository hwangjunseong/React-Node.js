const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_PRIVATE_KEY = process.env.PRIVATE_KEY;

//서버 setting => 순서 상관없음
app.listen(process.env.PORT);
//get + jwt 토큰발행
app.get("/jwt", function (req, res) {
  const payload = {
    // access token에 들어갈 payload
    userId: "1234",
  };

  const token = jwt.sign(payload, JWT_PRIVATE_KEY, {
    // JWT_PRIVATE_KEYt으로 sign하여 발급하고 return
    algorithm: "HS256", // 암호화 알고리즘
    expiresIn: "1h", // 유효기간
  });
  //쿠키에 담아 보냄
  res.cookie("jwt", token, {
    httpOnly: true,
  });
  res.send("jwt token created");
});
//get + jwt/decode 토큰 검증

app.get("/jwt/decode", function (req, res, next) {
  //   console.log(req.headers["Authorization"]);
  const authHeader = req.get("Authorization");
  //   if (!authHeader) {
  //     req.isAuth = false;
  //     return next(); // 아래코드를 실행하지않고 next미들웨어로 넘어감
  //   }
  //   const token = authHeader.split(" ")[1];
  var decodedToken = jwt.verify(authHeader, process.env.PRIVATE_KEY);
  console.log(decodedToken);
  res.send(decodedToken);
});
