
const prompt = require('prompt-sync')({sigint: true});

let num = parseInt(prompt('Introduce un número entre 0 y 10: '));

if(num <= 10 && num >= 0) {
    for(let i = 0; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

else {
    console.log('El número debe estar entre 0 y 10')
}