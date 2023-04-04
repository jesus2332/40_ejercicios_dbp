//Hacer un programa que imprima los números del 0 al 100, controlando las filas y las columnas. 

let col_num = 10;

for (let i = 0; i <= 100; i++) {
  process.stdout.write(i.toString().padStart(3, " ") + " "); //imprime el numero sin agregar nueva linea
  if (i  % col_num === 0) {
    console.log();
  }
}
