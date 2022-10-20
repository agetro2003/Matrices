const Matriz = require("../Matriz")

let a = new Matriz()

a.create(4,4,1)

a.replaceColumn([1,2,3],0)
a.replaceRow([4,5,6,7],3)

console.log(a)
