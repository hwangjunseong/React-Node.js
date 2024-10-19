async function f() {
  return 7; //promise 객체를 반환함 => Promise.resolve(7)
  //반환값이 promise가 아니면 Promise.resolve로 감싼다
}
f().then(
  function (result) {
    console.log("promise resolve", result);
  },
  function (error) {
    console.log("promise reject", error);
  }
);
