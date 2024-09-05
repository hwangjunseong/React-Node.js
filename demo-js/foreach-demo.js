const arr = [1, 2, 3, 4, 5];
arr.forEach(
  function (a, b, c) {
    console.log(`a : ${a}, b: ${b}, c: ${c}`); //a는 값, b는 인덱스
  }
  // function (a, b) {
  //   console.log(`a : ${a}, b: ${b}`); //a는 값, b는 인덱스 값
  // }
  //   function (a) {
  //     console.log(a);
  //   }
  //   안에 callback함수를 담음
  //   callback 함수는 언제불림?
  //   객체 또는 배열에서 요소를 하나 꺼낸 다음 불리는 콜백함수
  //   매개변수로 그 요소를 전달하여 호춛되는 콜백함수
  //   매개변수를 2개 전달하면? 첫번짜 인자 => 데이터 값, 두번쨰 인자 =>인덱스 값
  //   매개변수를 3개 전달하면? 첫번짜 인자 => 데이터 값, 두번쨰 인자 =>인덱스 값, 마지막 매개변수는 객체 통쨰로
);

//map과 forEach 만남
let map = new Map();
map.set(7, "seven");
map.set(9, "nine");
map.set(8, "eight");
//값이 들어간 순서대로 나옴
map.forEach(
  //     function (a) {
  //   console.log(a);
  // }
  //   function (a, b) {
  //     console.log(`a : ${a}, b: ${b}`); //a는 값, b는 key
  //   }
  function (a, b, c) {
    console.log(`a : ${a}, b: ${b}, c: ${c}`); //a는 값, b는 인덱스
  }
);
