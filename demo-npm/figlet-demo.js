const figlet = require("figlet");
//모듈
//아스키코드로 만든거
//익명의 함수를 쓰는 이유 => 이 함수를 쓸 일이 다른 데는 없어서
//figlet 만든 사람이 함수를 인수로 받기로
figlet("Hello World!! asci", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
