process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
console.log(cluster.isMaster); //true
if (cluster.isMaster) {
  //index.js가 child 모드에서 다시 실행된다
  //자식이라면 포크를 시도 x
  cluster.fork();

  console.log("parent");
} else {
  //자식
  console.log("child");
  const express = require("express");
  const crypto = require("crypto"); //무작위값생성해주는거

  const app = express();
  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }
  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 10000, 64, "SHA512", () => {
      console.log("1:", Date.now() - start);
    });
    doWork(5000); //5초 정지
    res.send(" hi");
  });
  app.listen(4885);
}
