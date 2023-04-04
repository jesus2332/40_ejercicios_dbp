//Introducir un número menor de 5000 y pasarlo a numero romano

const prompt = require('prompt-sync')({sigint: true});

let num = parseInt(prompt('Introduce un número menor de 5000: '))
let roman = "";

const romanNums = [["M", 1000], ["CM", 900],["D", 500],["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];


if (num < 5000) {
    for (let i = 0; i < romanNums.length; i++) {
        while (num >= romanNums[i][1]) {
          roman += romanNums[i][0];
          num -= romanNums[i][1];
        }
      }
      
      console.log(`El número romano correspondiente es: ${roman}`);
      
      
}
else {
    console.log('El número debe ser menor de 5000')
}