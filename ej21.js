    //Hacer un programa que calcule independientemente la suma de los pares y los impares de
    //los números entre 1 y 1000. 

let sum_even = 0
let sum_odd = 0

for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
        sum_even += i
    }
    else if (i % 2 != 0) {
        sum_odd += i
    }
}
console.log(`La suma de los pares es ${sum_even} y la suma de los impares es ${sum_odd}`)