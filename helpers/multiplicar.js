const fs = require("fs");

const crearArchivo = async (base, listar, hasta) => {
  try {
    let exit = "";
    for (let i = 1; i <= hasta; i++) {
      exit += `${base} * ${i} = ${base * i}\n`;
    }
    if (listar) console.log(exit);
    fs.writeFileSync(`./salida/tabla-${base}.txt`, exit);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
