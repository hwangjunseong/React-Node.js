let http = require("http");

function onRequest(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write("Hello Node JS");
  res.end();
}
//http 모듈에 createServer 함수에서 할일을 다 한 다음에(서버를 다 만들고 난 다음에)
//onRequest callback 함수를 실행시켜달라고 매개변수로 던진 것
//매개변수로 onRequest함수줌
http.createServer(onRequest).listen(8484);
