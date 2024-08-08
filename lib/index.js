const util = require('util');
const jsonld = require('fib-jsonld');

console.log(jsonld);

const sbox = jsonld.sbox;

const jssig = sbox.require("jsonld-signatures", __dirname);

for (var k in jssig) {
    var v = jssig[k];
    if (util.isAsyncFunction(v))
        jssig[k + "_sync"] = util.sync(v, true);
}

module.exports = jssig;