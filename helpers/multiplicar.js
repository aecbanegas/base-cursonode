const fs = require('fs');

const crearArchivo = async (base = 5) => {
    try {
        let salida = '';
        
        console.log('================');
        console.log(`Tabla del ${base}`);
        console.log('================');
        // Imprimir la tabla del 5 en la consola
        for (let index = 1; index <= 10; index++) {
            salida += `${base} x ${index} = ${index * base}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla_${base}.txt`, salida);
        //console.log(`tabla_${base}.txt creado`);
        return `tabla_${base}.txt`;
        
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}