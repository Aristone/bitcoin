var bitcoin = require("bitcoinjs-lib")
var helloblock = require('helloblock-js')({ network: 'testnet' })

var address = bitcoin.ECKey.fromWIF(wif_string)
              .pub
              .getAddress(bitcoin.networks.testnet)
              .toBase58Check()
              .toString();
              