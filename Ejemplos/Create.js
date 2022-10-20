const Matriz = require("../Matriz")

let a = new Matriz();
let b = new Matriz();
let c = new Matriz();
let d = new Matriz();

a.create(4,4,1);
b.create(2,5);
c.create(5,2,0);
d.set([[2,4,6], [1,3,5]])

console.log(a);
console.log(b);
console.log(c);
console.log(d);
