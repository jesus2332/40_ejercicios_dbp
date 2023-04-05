//Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son: ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO. 
const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola
const fs = require('fs');  //para trabajar con el filesystem

let id = parseInt(prompt("Introduce el ID: "))
let name = prompt("Introduce el nombre: ")
let lastName = prompt("Introduce el apellido: ")
let address = prompt("Introduce la direccion: ")
let state = prompt("Introduce el estado: ")

let data = [id, name, lastName, address, state]


fs.appendFileSync('datos.dat', data.join("  -  ") + "\n", 'utf8');

