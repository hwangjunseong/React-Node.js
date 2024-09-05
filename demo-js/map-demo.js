//map 함수(메서드)
//return하는 것에 차이가 있다
const arr = [1, 2, 3, 4, 5];
const foreeachArr = arr.forEach(function (a, b, c) {
  console.log(`a : ${a}, b: ${b}, c: ${c}`); //a는 값, b는 인덱스, c는 객체 통쨰로
  return a * 2;
});

const mapArr = arr.map(function (a, b, c) {
  //데이터, 인덱스, 객체 통쨰로
  console.log(`a : ${a}, b: ${b}, c: ${c}`); //a는 값, b는 인덱스, c는 객체 통쨰로
  return a * 2;
});
console.log(`foreach로 return : ${foreeachArr}`);
console.log(`map으로 return :${mapArr}`);
console.log(arr);
