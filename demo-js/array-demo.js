//자바스크립트의 배열의 비구조화
const array = [1, 2, 3, 4, 5];
//배열의 비구조화는 인덱스를 가지고 있기에 순서대로 들어감
const [, num2, num3, , num5] = array; // 2, 3, 5 들어감
console.log(num2, num3, num5);

// const [num1, num2, num3] = array; //1, 2, 3 들어감
// console.log(num1, num2, num3);
