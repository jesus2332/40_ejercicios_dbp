// Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100. 
let counter = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
        console.log(i)
        counter++
    }
}
console.log(`Hay ${counter} múltiplos de 2 o 3 entre 1 y 100.`)