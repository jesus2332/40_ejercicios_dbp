//Ordenar una matriz de M filas y N columnas por la primera columna utilizando el método SHELL (por inserción). 

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola

let rows = parseInt(prompt("Introduce el numero de filas: "))
let cols = parseInt(prompt("Introduce el numero de columnas: "))
let matrix = []
for(let i = 0; i < rows; i++){
    matrix.push([])
    for(let j = 0; j < cols; j++){
        matrix[i].push(parseInt(prompt(`Introduce el elemento ${j+1} de la fila ${i+1}: `)))
    }
}

for(let i of matrix){
    console.log(i)
}


let gap = Math.floor(matrix.length/2) 
while(gap > 0){
    for(let i = gap; i < matrix.length; i++){
        let temp = matrix[i]
        let j = i
        while(j >= gap && matrix[j-gap] > temp){
            matrix[j] = matrix[j-gap]
            j-=gap
        }
        matrix[j] = temp
    }
    gap = Math.floor(gap/2)
}

console.log("\n Matriz ordenada: ")
for(let i of matrix){
    console.log(i)
}

