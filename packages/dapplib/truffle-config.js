require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remember erosion heavy prize swift gesture'; 
let testAccounts = [
"0x370276e10a0821b636c20edaec5a39b5e53ec03608179e461f1c68ff5e954537",
"0x5d3fe9e44bab3405ff8d8ce85160c2f104bc831f471c2fe7b559f51575ee7d47",
"0x68b01b305b09d7c02ebede15617fe281b42c67f88e8aa751c17771b2afab0ca9",
"0xd7d9095d4ebafd5b9a12c407e67d40d57534253c8d3f40e349141d4df21e1e2d",
"0x67826a5caed493bd7b084ae9afaabae0ac6453d21d070746b11b753babaa6d56",
"0xb00061aaaf6ace9143ab809b16f4524ae77b97feabb840b012503505c2543913",
"0x1be70d839e80df26e6b898afdd39cb0dda39f3b4839cd24726f634c7e7d83a9d",
"0x6d0ab58b6ad44d3eaef35daf82d7dcb50185bcc98d14d2e73d1bbd9d278fdb87",
"0x33f3df4c9c8fbd4fd99966f412bb3ef82573c316d78ac49ddd5492bb20c8426f",
"0x698fd32686369a1af7918d22251bb025ce458e514141608baf3731a1fdae56c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
