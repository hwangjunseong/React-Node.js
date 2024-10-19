const bcrypt = require("bcryptjs");

const password = "1111";
const start = Date.now();
const bar = async () => {
  const hashedPassword = await bcrypt.hash(password, 12);
  console.log("1: ", Date.now() - start);

  console.log(hashedPassword);
};
bar();
//$2a$12$m61XNnjjr6.57jt10M9cX.tJAUm85y8ZRP2rKX0rj6sLs5ca.WqEe
//$2a$12$LB4s2CoxTckAVBrZfyfNjeAKPr3s4JPoz.3ootN1UHKLef8IorVhK
//매번 다르게나옴
