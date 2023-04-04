// Imprimir y contar los múltiplos de 3 desde el uno hasta un número que introducimos por teclado.
const prompt = require('prompt-sync')({sigint: true});

let number = parseInt(prompt("Introduce un número: ")) 
let counter = 0;
for (let i = 1; i <= number; i++) {
    if (i % 3 == 0) {
        counter++
    }
}

console.log(`Hay ${counter} múltiplos de 3 desde el 1 hasta el numero ${number}.`)