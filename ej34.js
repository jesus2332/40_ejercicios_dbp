

// Usando el  ejemplo, hacer un programa que busque una nota en la lista. 


const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola


cals = []
for (let i = 1; i <=10; i++) {
    cals.push(parseInt(prompt(`Introduce  la calificacion ${i}:  `)))
}

// for(let i in cals){
//     sum+=cals[i]
// }
// resultado = sum/cals.length
// console.log(`La calificacion media es ${resultado}`)

let search = parseInt(prompt("Introduce la nota que quieres buscar: "))
let found = false
let index = 0
console.log(cals)
for(let i in cals){

    if(search == cals[i]){
        found = true
        index = i
    }   
}

if(found == true){
    console.log(`La nota ${search} se encuentra en el indice ${index}`)
}
else{
    console.log(`La nota ${search} no se encuentra en la lista`)
}