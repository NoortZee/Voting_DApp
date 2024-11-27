module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // или "0.0.0.0"
      port: 7545,
      network_id: "*", // любой идентификатор сети
    }
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.19", // версия ниже 0.8.20
      settings: { 
        optimizer: {
          enabled: true,
          runs: 200
        }
      } 
    } 
  } 
};
