const obj1 = {};
const obj2 = { message: "not empty" };
const num1 = 1; //숫자는 객체가 아니다
const str1 = "one";
const str2 = ""; //문자열도 객체이다 => 원시 타입이지만 , 문자열에 대해
//객체처럼 동작함 => Objects.keys를 거치면 String(str1)을 거쳐서 String 객체로 변환됨
//String 객체에 메서드가 적용됨
//메서드 실행 후 원시 값으로 돌아감

//배열 반환
console.log(Object.keys(obj1)); //[]
// console.log(Object.keys(obj1).length === 0); //true
console.log(isEmpty(obj1)); //true

console.log(Object.keys(obj2)); //length ===1 , ["message"]
// console.log(Object.keys(obj2).length === 1); //true
console.log(isEmpty(obj2)); //false

console.log(Object.keys(num1)); //length ===0, []
// console.log(Object.keys(num1).length === 0); //true
console.log(isEmpty(num1)); //true
console.log(1);
console.log(Object.keys(str1)); //["0", "1", "2"] => 인덱스
// console.log(Object.keys(str1).length === 0); //false
console.log(isEmpty(str1)); //false

console.log(Object.keys(str2)); //[]
// console.log(Object.keys(str2).length === 0); //true
console.log(isEmpty(str2)); //true

//함수 표현식이라면 => 함수를 변수에 할당하는 방식, 호이스팅 되지 않음
// const isEmpty = function (obj) {
//     return Object.keys(obj).length === 0;
//   };
//함수 만들기, 함수 선언식
function isEmpty(obj) {
  //객체인지 먼저 확인 => 모든 객체에는 constructor라는 속성 있음 => 해당 객체를 생성한 생성자를 참조
  if (obj.constructor === Object) {
    console.log("객체임");
  }
  //비어있다면 true를 return
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}
