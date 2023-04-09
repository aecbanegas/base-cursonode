const {crearArchivo} = require("./helpers/multiplicar")
//const base = 9;
console.log(process.argv)
const [,,arg3='base=5'] = process.argv;
const [,base] = arg3.split('=')
console.log(base)
//console.clear();
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch( err => console.log(err));