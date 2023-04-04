//Cargar las notas de los alumnos de un colegio en función del número de cursos y del número de alumnos por curso. 

const prompt = require('prompt-sync')({sigint: true}); //para los inputs en consola

let cursos = parseInt(prompt("Introduce el numero de cursos: "))
let alumnos = parseInt(prompt("Introduce el numero de alumnos por curso: "))
let notas = []
for(let i = 0; i < cursos; i++){
    notas.push([])
    for(let j = 0; j < alumnos; j++){
        notas[i].push(parseInt(prompt(`Introduce la nota del alumno ${j+1} del curso ${i+1}: `)))
    }
}
console.log(notas)
