// Introducir una frase por teclado e imprimirla en el centro de la pantalla. 

const prompt = require('prompt-sync')({sigint: true});

let phrase = prompt('Introduce una frase: ');
espacio = "                                     "
console.log(espacio + phrase + espacio )