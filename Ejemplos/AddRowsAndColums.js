const Matriz = require("../Matriz")


let a = new Matriz()
a.create (3,3,0)
a.addRowData([1,2,3])
a.addRowData([1,4,4])
a.addRowData([1,5,6])
a.addColumnData([1,3,3])
a.addColumnData([3,5,7])
console.log(a)