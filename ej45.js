// Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el campo ID. Crear un programa que nos permita consultar un registro siempre que queramos

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola
const fs = require('fs');  //para trabajar con el filesystem

let data = fs.readFileSync('datos.dat', 'utf8').split("\n")

let id = parseInt(prompt("Introduce el ID a consultar: "))

for(let i in data){
    if(data[i].split("  -  ")[0] == id){
        console.log(data[i])
    }
}