// 39.- Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer elemento valga 1, el segundo 2, el tercero 3 el cuarto 4, el quinto 5, el sexto 6 y asi sucesivamente. 

let pages = 3;
let rows = 4;
let cols = 5;

let table = [];
for(let i = 0; i < pages; i++){
    table.push([]);
    for(let j = 0; j < rows; j++){
        table[i].push([]);
        for(let k = 0; k < cols; k++){
            table[i][j].push((i*rows*cols)+(j*cols)+k+1);
        }
    }
}
console.log(table)