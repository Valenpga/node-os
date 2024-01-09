const os = require('os');

function getOSInfo() {
  return {
    Nombre: os.type(),
    Tipo: os.platform(),
    Versión: os.version(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal: `${(os.totalmem() / Math.pow(2, 20)).toFixed(2)} MB`,
    MemoriaLibre: `${(os.freemem() / Math.pow(2, 20)).toFixed(2)} MB`,
  };
}

module.exports = { getOSInfo };
