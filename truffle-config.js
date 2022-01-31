
// const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "192.168.1.104",
      port: 7545,
      network_id: "*",
    }
  },
  compilers: {

  },

};
