// Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de
// todos los números pares por un lado, y por otro, la de todos los impares. 
let sum_odd = 0
let sum_even = 0
for (let i = 1; i <=100 ; i++) {
    console.log(i)
    if(i%2==0){
        sum_even += i
    }
    else if(i%2!=0){
        sum_odd += i
    }
}

console.log(`La suma de los números pares es ${sum_even} y de los impares es ${sum_odd}.`)