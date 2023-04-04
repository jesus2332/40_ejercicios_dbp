//Introducir dos números por teclado y mediante un menú, calcule su suma, su resta, su
//multiplicación o su división. 

const prompt = require('prompt-sync')({sigint: true});

let num1 = parseInt(prompt('Introduce un número: '));
let num2 = parseInt(prompt('Introduce otro numero: '));

sumar = (a,b) => { return a + b}
multiplicar = (a,b) => {return  a * b}
restar = (a,b) => {return  a - b}
dividir = (a,b) => { return a / b}

let op= -1;
while (op != 5) {
    console.log(" \nElige la opcion que quieras realizar: ")
    console.log("1. Sumar")
    console.log("2. Restar")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Salir")
    op = parseInt(prompt('Introduce una opción: '));
    switch (op) {
        case 1:
            console.log(`El resultado de la suma es: ${sumar(num1,num2)}`)
            break;
        case 2:
            console.log(`El resultado de la resta es: ${restar(num1,num2)}`)
            break;
        case 3:
            console.log(`El resultado de la multiplicación es: ${multiplicar(num1,num2)}`)
            break;
        case 4:
            console.log(`El resultado de la división es: ${dividir(num1,num2)}`)
            break;
        case 5:
            console.log("Hasta luego")
            break;
        default:
            console.log("Opción no válida")
            break;
    }
}
