
//Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
//en y calcule e imprima su media. 
const prompt = require('prompt-sync')({sigint: true}); 

cals = []
sum= 0
for (let i = 1; i <=10; i++) {
    cals.push(parseInt(prompt(`Introduce  la calificacion ${i}:  `)))
}

for(let i in cals){
    sum+=cals[i]
}
resultado = sum/cals.length
console.log(`La calificacion media es ${resultado}`)