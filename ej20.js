
// Calcular el factorial de un número, mediante funciones. 
function factorial(n){
    if(n<=1){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}

console.log(factorial(6))