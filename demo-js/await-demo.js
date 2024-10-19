async function f() {
  let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("완료"), 3000);
  });
  let result1 = await promise1;
  console.log(result1);
  let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("완료" + result1), 3000);
  });
  let result2 = await promise2;
  console.log(result2);
  let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("완료" + result2), 3000);
  });
  let result3 = await promise3;
  console.log(result3);
}
f();
