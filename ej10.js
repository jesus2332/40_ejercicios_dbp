// Introducir un número por teclado y que nos diga si es par o impar

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola
let number = parseInt(prompt("Introduce un número: "))

if (number % 2 == 0) {
    console.log("El número es par.")
}
else{
    console.log("El número es impar.")
}