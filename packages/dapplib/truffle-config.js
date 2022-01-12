require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net property install narrow flush ten'; 
let testAccounts = [
"0x2762134e2e6f0f92720d1d53ee6f741029e7fe42d66805bbb7f1423c58256bb3",
"0x23fa778acdeaedde57386394afbc34f9040472d0d8788bfb13b5d3bee67f97c9",
"0x787d8b775122c5bc9ab23cd2fc02d6914d495c98186d47033b9f7aaa4db6a218",
"0x15df470b47c94d47fe790d69be1ff664f5999ab09039a9bbf7f997886de43a63",
"0xc9914d6de39b8cbd10457ce8ca9450648781a009ea943be8d9ae8bad8b78487d",
"0xf82e649fea255b559bb046517c8677199915efe6dcea2060e81b3d212799b47a",
"0xeab57cb5039398ce524de0ba257ddcdcbe6170608d3e87fedaf2ca2b2375f148",
"0x23c367462a2d62834dc93bc849f28423455f1ca8758d0ebc3dc159d7b928fcca",
"0x372e23e28f7b05df2883750dacdc7874cabe0d1940bcf1410969dd8139f0b7a9",
"0xe0ab680d44e5bf35e5b362f6b08cd42b9c3e32cd3d333057afeb49becc218f42"
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
            version: '^0.8.0'
        }
    }
};

