
//Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el
//segundo sea mayor o igual que el primero. 

const prompt = require('prompt-sync')({sigint: true});

let num1 = parseInt(prompt('Introduce un número: '))
let num2 = parseInt(prompt('Introduce otro número: '))
let count = 0
let sum = 0

if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 == 0) {
            count++
            sum += i
            console.log(i)
        }
    }
    console.log(`Hay ${count} múltiplos de 2, la suma de los múltiplos es ${sum} `)

}
else if (num1 > num2) {
    console.log("El primer número debe ser menor que el segundo")
}
