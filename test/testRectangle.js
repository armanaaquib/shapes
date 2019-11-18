const rectangle = require('../src/rectangle.js');
const assert = require('assert');
const expectOuts = require('./expectedOutputs.js');

const testFilledRows = function(){
    console.log("  Testing filled Rows");
    assert.deepStrictEqual(rectangle["filled"](3,9),expectOuts.rectangleFilledRows);
};

const testHollowRows = function(){
    console.log("  Testing hollowRows");
    assert.deepStrictEqual(rectangle["hollow"](3,9),expectOuts.rectangleHollowRows);
};

const testAlternatingRows = function(){
    console.log("  Testing alternatingRows");
    assert.deepStrictEqual(rectangle["alternating"](3,9),expectOuts.rectangleAlternatingRows);
};

const testInterlacedRows = function(){
    console.log("  Testing InterlacedRows");
    assert.deepStrictEqual(rectangle["interlaced"](3,9),expectOuts.rectangleInterlacedRows);
};

const runTests = function(){
    console.log("Testing Rectangles...");
    testFilledRows();
    testHollowRows();
    testAlternatingRows();
    testInterlacedRows();
    console.log("...Testing Rectangles");
};

runTests();

