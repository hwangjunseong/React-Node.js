function first() {
  console.log("first");
}
function second() {
  console.log("second");
}
function third() {
  console.log("third");
}
//none blocking 예시 first 후 1초뒤에 second실행하니 기다리는동안 third함
first();
setTimeout(second, 1000);
// second();
third();
