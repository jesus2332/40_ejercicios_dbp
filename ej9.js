//Introducir un número por teclado y que nos diga si es positivo o negativo. 

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola
let number = parseInt(prompt("Introduce un número: "))

if (number >= 0) {
    console.log("El número es positivo.")
}
else{
    console.log("El número es negativo.")
}