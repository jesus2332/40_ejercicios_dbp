//Hacer un programa que cuente las veces que aparece una determinada letra en una frase
//que introduciremos por teclado. 

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola

let phrase = prompt('Introduce una frase: ')
let letter = prompt('Introduce una letra: ')
let count = 0

for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == letter) {
        count++
    }
}
console.log(`La letra ${letter} aparece ${count} veces en la frase ${phrase}`)