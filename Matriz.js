 class Matriz {
    constructor(){
        this.main = []
        this.columns = 0
        this.rows = 0
}

//Crear Matriz
// n es filas y m es columnas
create(n,m,x=0){
    if (x==0) 
    {
        let array = []
     for (let i = 0; i < n; i++) {
         array[i] = []
        for (let j = 0; j < m; j++) {
            array[i][j]=0
        }
        
    }   
    this.main = array
   
    }else if(x==1) {
        if (n==m){
            let array = []
            for (let i = 0; i < n; i++) {
                array[i] = []
                for (let j = 0; j < m; j++) {
                 if (i==j) {
                     array[i][j] = 1
                 }else{
                     array[i][j] = 0
                 }
                }
                this.main = array
            }
            
        }else{
            console.log("La matriz identidad solo puede crearse si es cuadrada")
        }
    }
    this.columns=m
    this.rows=n
}

//Añadir columnas
addColumnData(array) {
    for (let i = 0; i < this.rows; i++) {
        
        if (array[i] == undefined) { this.main[i].push(0)} else{
            this.main[i].push(array[i])
           
        }
  
    }
    this.columns++
}


//Añadir filas
addRowData(array) {
    if (array.length < this.columns){
        let length = array.length
        for (let i = 0; i < (this.columns - length); i++) {
          array[length+i] = 0
        } 
    }
   this.main.push(array.slice(0,this.columns));
this.rows++    
}

//Remplazar columna
replaceColumn(array, n){
    if (array.length<this.rows) {
    let length = array.length
    for (let i = 0; i < (this.rows - length); i++) {
    array[length+i] = 0
    }
    }
    for (let i = 0; i < this.rows; i++) {
        this.main[i][n] = array[i]
    }
}

//Remplazar fila
replaceRow(array,n){
if (array.length < this.columns) {
    let length = array.length
    for (let i = 0; i < (this.columns-length); i++) {
        array[length+i] = 0
    }
}
    this.main[n] = array.slice(0,this.columns);
}

//Multiplicar por un escalar
scalarMultiplication(x){
    let array = []
    for (let i = 0; i < this.rows; i++) {
        array[i] = this.main[i].map(function(element){
            return element*x;
        })
    }
    this.main = array
}

//Hallar la matriz transpuesta
transpose(){
    let transpuesta = []
    for (let i = 0; i < this.columns; i++) {
        transpuesta[i] = []
        for (let j = 0; j < this.rows; j++) {
          transpuesta[i][j] = this.main[j][i]
        }
    }
    return transpuesta
}

//Multiplicar matrices
multiply(a, b){
  if (a.columns == b.rows) {
      this.rows = a.rows
      this.columns = b.columns

      let result = []
for (let i = 0; i < this.rows; i++) {
    result[i] = []
    for (let j = 0; j < this.columns; j++) {
        result[i][j] = 0
       for (let k = 0; k < a.columns; k++) {
         result[i][j] += (a.main[i][k] * b.main[k][j])
       }
    }
    
}
this.main = result
  }     

   else {
      console.log("Las matrices introducidas no pueden ser multiplicadas")
  }
}

//sumar matrices
addition(a,b){
    if (a.rows == b.rows && a.columns == b.columns) {
        let result = [] 
        for (let i = 0; i < a.rows; i++) {
            result[i] = []
            for (let j = 0; j < a.columns; j++) {
                result[i][j] = a.main[i][j] + b.main[i][j]
            }
        }
        this.main = result;
        this.columns = a.columns;
        this.rows = b.rows;
    }
    else{
        console.log("Las matrices introducidas no pueden ser sumadas")
    }
}


//restar matrices
subtraction(a,b){
    if (a.rows == b.rows && a.columns == b.columns) {
        let result = [] 
        for (let i = 0; i < a.rows; i++) {
            result[i] = []
            for (let j = 0; j < a.columns; j++) {
                result[i][j] = a.main[i][j] - b.main[i][j]
            }
        }
        this.main = result;
        this.columns = a.columns;
        this.rows = b.rows;
    }
    else{
        console.log("Las matrices introducidas no pueden ser sumadas")
    }
}
// Definir los valores de una matriz
set(main) {
    let verificador = true;
    try {
        let x = main[0].length
       for (let i = 1; i < main.length; i++) {
            if(x != main[i].length ){
                verificador = false;
            }
    } 
    if (verificador) {
        this.main = main
        this.rows = main.length
        this.columns = main[0].length
    }
    else {
        console.log("El valor introducido no es una matriz")
    }
    } catch (error) {
        console.log("El valor introducido no es una matriz")
    }
    
}
// retorna la inversa de una matriz
invert(){
    if (this.columns == this.rows){
    let x = new Matriz()
    x.create(this.rows, this.columns, 1)
   let y = JSON.parse(JSON.stringify(this.main))
        for (let i = 0; i < this.rows; i++) {
let div = y[i][i]
            for (let j = 0; j < this.columns; j++) {
               y[i][j]/=div 
             x.main[i][j]/=div  
            }
            for (let k = 0; k < this.rows; k++) {
                if (i != k) {
        let n = y[k][i]
                    for (let j = 0; j < this.columns; j++) {
                        y[k][j] -= (n*y[i][j]) 
                        x.main[k][j] -= (n*x.main[i][j])
                    }
                }
            }
        }
return x.main
}else{
    console.log("La matriz no es cuadrada, por lo tanto no tiene inversa")
}
}
}

module.exports = Matriz;
