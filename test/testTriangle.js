const triangle = require('../src/triangle.js');
const assert = require('assert');
const expectOuts = require('./expectedOutputs.js');

const testFilledRows = function(){
    console.log("  Testing filled Rows");
    assert.deepStrictEqual(triangle["filled"](6),expectOuts.triangleFilledRows);
};

const testHollowRows = function(){
    console.log("  Testing hollowRows");
    assert.deepStrictEqual(triangle["hollow"](6),expectOuts.triangleHollowRows);
};

const testAlternatingRows = function(){
    console.log("  Testing alternatingRows");
    assert.deepStrictEqual(triangle["alternating"](6),expectOuts.triangleAlternatingRows);
};

const testInterlacedRows = function(){
    console.log("  Testing InterlacedRows");
    assert.deepStrictEqual(triangle["interlaced"](6),expectOuts.triangleInterlacedRows);
};

const runTests = function(){
    console.log("Testing Triangles...");
    testFilledRows();
    testHollowRows();
    testAlternatingRows();
    testInterlacedRows();
    console.log("...Testing Triangles");
};

runTests();
