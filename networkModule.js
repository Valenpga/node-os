const os = require('os');

function getNetworkInfo() {
  const interfaces = os.networkInterfaces();
  const networkInfo = {};

  for (const interfaceName in interfaces) {
    networkInfo[interfaceName] = interfaces[interfaceName].map((iface) => ({
      Familia: iface.family,
      Dirección: iface.address,
      Interno: iface.internal,
    }));
  }

  return networkInfo;
}

module.exports = { getNetworkInfo };
