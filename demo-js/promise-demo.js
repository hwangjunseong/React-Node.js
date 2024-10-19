let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("완료"), 3000);
});
promise.then(
  function (result) {
    console.log(result);
  },
  function (err) {
    console.log(err);
  }
);

let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("완료"), 3000);
})
  .then(
    function (result) {
      console.log("1", result);
      return result + "!!!!!!";
    },
    function (err) {
      console.log(err);
    }
  )
  .then(
    function (result) {
      console.log("2", result);
      return result + "!!!!!!";
    },
    function (err) {
      console.log(err);
    }
  )
  .then(
    function (result) {
      console.log("3", result);
      return result + "!!!!!!";
    },
    function (err) {
      console.log(err);
    }
  );
