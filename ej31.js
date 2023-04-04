//Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen
//las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de
//multiplicar. 

const prompt = require('prompt-sync')({sigint: true});

let num1 = parseInt(prompt('Introduce un número: '));

function factorial(n){
    if(n<=1){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}

function isPrime(num){

    count = 0
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
        
}

function multTable(num){
    for(let i = 0; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

let op = 0
while(op!=4){
    console.log("\nElige lo que quieras hacer con el número: ")
    console.log("1. Comprobar si es primo")
    console.log("2. Hallar su factorial")
    console.log("3. Imprimir su tabla de multiplicar")
    console.log("4. Salir")
    op = parseInt(prompt('Introduce una opción: '));
    switch (op) {
        case 1:
            isPrime(num1)
            break;
        case 2:
            console.log(`El factorial de ${num1} es ${factorial(num1)}`)
            break;
        case 3:
            multTable(num1)
            break;

        case 4:
            console.log("Hasta luego")
            break;

        default:
            console.log("Opción no válida")
            break;
    }
}