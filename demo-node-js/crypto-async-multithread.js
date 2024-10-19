process.env.UV_THREADPOOL_SIZE = 5;
const crypto = require("crypto"); //무작위값생성해주는거
const start = Date.now();
crypto.pbkdf2("a", "b", 10000, 64, "SHA512", () => {
  console.log("1:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 10000, 64, "SHA512", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 10000, 64, "SHA512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 10000, 64, "SHA512", () => {
  console.log("4:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 10000, 64, "SHA512", () => {
  console.log("5:", Date.now() - start);
});
