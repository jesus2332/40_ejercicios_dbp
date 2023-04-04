// Hacer un programa que simule el funcionamiento de un reloj digital y que permita ponerlo en hora.





let reloj = new Date()
function setHour(hour, minute) {
    reloj.setHours(hour, minute)
}


console.log(`La hora actual es ${reloj.getHours()}:${reloj.getMinutes() }`);