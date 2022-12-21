const { crearArchivo } = require("./helpers/multiplicar");

const argv = require("./config/yargs");
console.clear();

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;
async function multiplicar() {
  try {
    const respose = await crearArchivo(base, listar, hasta);
    console.log(respose);
  } catch (error) {
    console.log(error.message);
  }
}

multiplicar();

console.log(argv);
console.log(argv.base);

/* desde linea de comandos puede comunicar con mi aplicacion y poder enviar la base por ejemplo */
/* podemos enviar argurmentos */

/* whe can use yargs to send data trhougth the terminal, we can retrieve this data trought argv we can use flags */
