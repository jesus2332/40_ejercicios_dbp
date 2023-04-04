// Comprobar si un número mayor o igual que la unidad es primo. 
//Un número primo es aquel que sólo es divisible por sí mismo y la unidad.

const prompt = require('prompt-sync')({sigint: true});

let num = parseInt(prompt('Introduce un número: '))
let count = 0

if (num >= 1) {
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++
        }
    }
    if (count == 2) {
        console.log('El número es primo')
    }
    else {
        console.log('El número no es primo')
    }
}
    