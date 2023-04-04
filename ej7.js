// Introducir tantas frases como queramos y contarlas. 

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola

let phrase = prompt("Introduce una frase: ")
let counter = 0
while (phrase != "") {
    counter++
    phrase = prompt("Introduce una frase: ")
}
console.log(`Has introducido ${counter} frases.`)
