const HDWalletProvider = require('@truffle/hdwallet-provider');

// Секретное слово мнемоники или приватный ключ
const mnemonic = 'a890857f26a11fe6f5cb6a88436a3a45d3c3c643333384cf99b837a8dd1da438';

module.exports = {
  networks: {
    rinkeby: {
      provider: () =>
          new HDWalletProvider(
              mnemonic,
              `https://rinkeby.infura.io/v3/8bbd0eeaca6b43fb876420a3f7265da2`
          ),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  compilers: {
    solc: {
      version: "^0.8.0"
    }
  },

  db: {
    enabled: false
  }
};
   