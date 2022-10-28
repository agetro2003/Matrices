const Matriz = require("../Matriz")


let a = new Matriz()

a.set([[2,3,1], [1,-1,2], [0,1,0]])

let b = new Matriz()

b.set(a.invert())

let c = new Matriz()

c.multiply(a,b)

console.log(c)