const Matriz = require("../Matriz")

let a = new Matriz()
a.set([[1,2,3],[4,5,6],[7,8,9]])
a.scalarMultiplication(2)
console.log(a)

let b = new Matriz()
let c = new Matriz()

b.set([[5,3,-4,-2], [8,-1,0,-3]])
c.set([[1,4,0],[-5,3,7],[0,-9,5],[5,1,4]])

let e = new Matriz()
e.multiply(b,c)
//console.log(b)
//console.log(c)
console.log(e)