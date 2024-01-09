const { getOSInfo } = require('./osModule');
const { getNetworkInfo } = require('./networkModule');

const osInfo = getOSInfo();

console.log('Información del Sistema Operativo:');
for (const key in osInfo) {
  console.log(`${key}: ${osInfo[key]}`);
}

const networkInfo = getNetworkInfo();

console.log('\nInformación de las Interfaces de Red:');
for (const interfaceName in networkInfo) {
  console.log(`${interfaceName}:`);
  networkInfo[interfaceName].forEach((info) => {
    console.log(`  Familia: ${info.Familia}`);
    console.log(`  Dirección: ${info.Dirección}`);
    console.log(`  Interno: ${info.Interno}`);
  });
}
