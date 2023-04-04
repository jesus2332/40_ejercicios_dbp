// Hacer un programa que solo nos permita introducir S o N. 
const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola


var letter = prompt("Introduce S o N: ")
while (letter != "S" && letter != "N") {
    letter = prompt("Error, solo puedes introducir S o N: ")
}
