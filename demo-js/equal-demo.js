if (1 == "1") {
  console.log("same"); //출력, 내용 + 자료형 강제 형변환
} else {
  console.log("diff");
}

if (1 === "1") {
  console.log("same");
} else {
  console.log("diff"); //출력, 내용, 자료형 상관 있음
}
