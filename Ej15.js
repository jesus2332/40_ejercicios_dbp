//Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
//números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
//Calcular la suma de los impares. 

const prompt = require('prompt-sync')({sigint: true}); 

let num1 = parseInt(prompt('Introduce un número: '))
let num2 = parseInt(prompt('Introduce otro número: '))
let count_even = 0
let sum_odd = 0

if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        if(i>=0){
        console.log(i)
        }
        if (i % 2 == 0) {
            count_even++
        }
        else if (i % 2 != 0) {
            sum_odd += i
        }
    }
}
else if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
        if(i>=0){
            console.log(i)
            }
        if (i % 2 == 0) {
            count_even++
        }
        else if (i % 2 != 0) {
            sum_odd += i
        }
    }
}
else if (num1 == num2) {
    console.log('Los números son iguales')  
}

console.log(`Hay ${count_even} numeros pares, la suma de los impares es ${sum_odd} `)