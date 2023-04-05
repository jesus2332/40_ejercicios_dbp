// Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones de un ID 
// en particular, en base a un ID que se le pida al usuario.

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola
const fs = require('fs');  //para trabajar con el filesystem

let id = parseInt(prompt("Introduce el ID a modificar: "))
let data = fs.readFileSync('datos.dat', 'utf8').split("\n")
let newData = []
for(let i in data){
    if(data[i].split("  -  ")[0] == id){
        let name = prompt("Introduce el nombre: ")
        let lastName = prompt("Introduce el apellido: ")
        let address = prompt("Introduce la direccion: ")
        let state = prompt("Introduce el estado: ")
        newData.push([id, name, lastName, address, state].join("  -  "))
    }else{
        newData.push(data[i])
    }
}
fs.writeFileSync('datos.dat', newData.join("\n"), 'utf8')
