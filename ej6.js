const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola

// Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un número que introducimos por teclado. 

let number = parseInt(prompt("Introduce un número: ")) //parseInt convierte un string a int
for (let i = 1; i <= number; i++) {
    console.log(i)
}