// De que manera realizar un archivo de texto para guardar el documento de texto con los resultados
// Se utilizaria el paquete file system para crear archivos
const fs = require('fs');

let salida= '';
const base = 1;
console.clear();
console.log('================');
console.log(`Tabla del ${base}`);
console.log('================');
// Imprimir la tabla del 5 en la consola
for (let index = 1; index <= 10; index++) {
    salida+=`${base} x ${index} = ${index*base}\n`;
}
console.log(salida);
fs.writeFile(`tabla_${base}.txt`, salida, (err)=>{
    if (err) throw err;
    console.log('Archivo creado');
});