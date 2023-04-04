//Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, e imprimirla.


let matriz = []
for(let i = 0; i < 4; i++){
    matriz.push([])
    for(let j = 0; j < 5; j++){
        matriz[i].push(Math.floor(Math.random() * 100) + 1)
    }
}
console.log(matriz)

