const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
// const privateKey = "shhhhh";
//서명 - 토큰 발행
const token = jwt.sign({ foo: "bar" }, process.env.PRIVATE_KEY);
//token 생성 = jwt를 만들어서 서명을 했음(페이로드 , 나만의 암호키 + SHA256)
console.log(token);

//검증
//검증에 성공하면 페이로드 값을 확인 가능
// verify a token symmetric - synchronous
var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
console.log(decoded); // { foo: 'bar', iat: 1727254139 }
//iat는 토큰이 발행된 시간을 초 형태로 나타낸 것
//똑같은 내용으로 토큰을 발행해도 발행된 시간이 다르면 서명 값은 다르다
