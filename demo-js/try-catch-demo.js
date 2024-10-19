let string = '{"num1":1}';
try {
  //   username;
  let json = JSON.parse(string);
  //undefined이면 우리 입장에선 에러임
  console.log(json.name);
  if (!json.name) {
    throw new Error("name is undefined");
  }
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
