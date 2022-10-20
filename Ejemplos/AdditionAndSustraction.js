const Matriz = require("../Matriz")


let a = new Matriz();
let b = new Matriz();
let c = new Matriz();
let d = new Matriz();

a.set([[12,-5,6], [-1,-4,8], [-12,15,4]])

b.set([[3,7,11], [-1,2,13], [-8,4,2]])

c.addition(a,b)

d.subtraction(a,b)

console.log(c)

console.log(d)