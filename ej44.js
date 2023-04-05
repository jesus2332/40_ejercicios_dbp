// Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que introduciremos por teclado. 

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola
const fs = require('fs');  //para trabajar con el filesystem


let state = prompt("Introduce el estado: ")

let data = fs.readFileSync('datos.dat', 'utf8').split("\n")

for(let i in data){
    if(data[i].split("  -  ")[4] == state){
        console.log(data[i])
    }
}
