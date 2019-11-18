const diamond = require('../src/diamond.js');
const assert = require('assert');
const expectOuts = require('./expectedOutputs.js');

const testFilledRows = function(){
    console.log("  Testing filled Rows");
    assert.deepStrictEqual(diamond["filled"](5),expectOuts.diamondFilledRows);
};

const testHollowRows = function(){
    console.log("  Testing hollowRows");
    assert.deepStrictEqual(diamond["hollow"](5),expectOuts.diamondHollowRows);
};

const testAlternatingRows = function(){
    console.log("  Testing alternatingRows");
    assert.deepStrictEqual(diamond["alternating"](5),expectOuts.diamondAlternatingRows);
};

const testInterlacedRows = function(){
    console.log("  Testing InterlacedRows");
    assert.deepStrictEqual(diamond["interlaced"](5),expectOuts.diamondInterlacedRows);
};

const runTests = function(){
    console.log("Testing Diamond...");
    testFilledRows();
    testHollowRows();
    testAlternatingRows();
    testInterlacedRows();
    console.log("...Testing Diamond");
};

runTests();
