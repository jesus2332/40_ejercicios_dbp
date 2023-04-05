//Hacer un programa que nos permita eliminar una linea de texto en base al ID en el archivo datos.dat

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola
const fs = require('fs');  //para trabajar con el filesystem

let id = parseInt(prompt("Introduce el ID a eliminar: "))
let data = fs.readFileSync('datos.dat', 'utf8').split("\n")
let newData = []
for(let i in data){
    if(data[i].split("  -  ")[0] != id){
        newData.push(data[i])
    }
}
fs.writeFileSync('datos.dat', newData.join("  -  "), 'utf8')

