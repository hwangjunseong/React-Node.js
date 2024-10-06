const crypto = require("crypto"); //무작위값생성해주는거
const password = "1111";
const salt = crypto.randomBytes(32).toString("base64");
const hashedPassword = crypto
  .pbkdf2Sync(password, salt, 10000, 64, "SHA256")
  .toString("base64");
//salt값이 바뀌면 매번 다르게 나옴
//o5r6bHdEhcv/qrTFrVy/gaLuVQhfr4kBk9fyP4Nf1q8= JN8KvwxREGVn
console.log(salt, hashedPassword);

//crypto 사용해도됨 => 근데 db에 랜덤바이트로 생성된 값이랑 해쉬된 비밀번호를 저장한뒤
//나중에 로그인할 때 db에 저장된 salt와 body로 들어온 paswword가지고
//hashedPassword 만드는데 이걸 db에 저장된 hashedPassword와 비교함
const loginUser = {
  password: "1111",
  salt: salt,
};
const hashPassword = crypto
  .pbkdf2Sync(password, loginUser.salt, 10000, 64, "SHA256")
  .toString("base64");
if ((loginUser.password = hashPassword)) {
  console.log("Password 동일");
}
