// Hacer un programa que imprima el mayor y el menor de una serie de cinco números que
//vamos introduciendo por teclado. 
const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola


let numbers = []
for (let i = 0; i < 5; i++) {
    numbers.push(parseInt(prompt('Introduce un número: ')))
}
numbers.sort()
console.log(`El número más pequeño es ${numbers[0]} y el más grande es ${numbers[numbers.length - 1]}`) 