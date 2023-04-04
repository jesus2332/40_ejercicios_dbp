// Hacer un programa que imprima los números impares hasta el 100 y que imprima cuantos impares hay. 
odd_numbers = 0
for (let i = 0; i <=100; i++) {
    if(i%2!=0){
        console.log(i)
        odd_numbers += 1
    }
   
}
console.log(`Hay ${odd_numbers} números impares`)