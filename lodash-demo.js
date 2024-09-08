const o = { x: { y: 1 } };
//얕은 복사
const c1 = { ...o };
console.log(c1 === o); //false
console.log(c1.x === o.x); //true
const _ = require("lodash");
//깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); //false
console.log(c2.x === o.x); //false
