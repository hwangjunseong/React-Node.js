if (true) {
  var num1 = 7; //함수 스코프
  //   const num2 = 3; // 블록 스코프 => 블록 안에서 선언이 되었다면 그 밖에선 사용 불가능
  //   let num3 = 5; // 블록 스코프 => 블록 안에서 선언이 되었다면 그 밖에선 사용 불가능
  let num3 = 5;
  const num2 = 3; //초기화 이후 값 못바꿈
  num3 = 21;
  //속도 느림
  console.log(num1 + " x " + num2 + " = " + num3);
  //template 문자열
  console.log(`${num1} x ${num2} = ${num3}`);
}
// console.log(num1, num2, num3);
console.log(num1);
