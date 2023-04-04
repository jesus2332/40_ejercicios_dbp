//Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada
//impresión ir desplazada cuatro columnas hacia la derecha. 
const prompt = require('prompt-sync')({sigint: true}); 

let phrase = prompt('Introduce una frase: ')


empty = '    '
console.log(phrase)
for (let i = 1;  i < 5; i++) {
    console.log(empty + phrase)
    empty += '    '
}