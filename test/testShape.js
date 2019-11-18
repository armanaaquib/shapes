const shape = require('../src/shape.js');
const assert = require('assert');
const expectOuts = require('./expectedOutputs.js');

const testRectangle = function(){
    console.log("Testing Rectangle.");

    console.log("  Testing filled Rows");
    assert.deepStrictEqual(shape.rectangle("filled",[3,9]),expectOuts.rectangleFilledRows);

    console.log("  Testing hollowRows");
    assert.deepStrictEqual(shape.rectangle("hollow",[3,9]),expectOuts.rectangleHollowRows);

    console.log("  Testing alternatingRows");
    assert.deepStrictEqual(shape.rectangle("alternating",[3,9]),expectOuts.rectangleAlternatingRows);

    console.log(".Testing Rectangle");
};

const testTriangle = function(){
    console.log("Testing Triangle.");

    console.log("  Testing filled Rows");
    assert.deepStrictEqual(shape.triangle("filled",[6]),expectOuts.triangleFilledRows);

    console.log("  Testing hollowRows");
    assert.deepStrictEqual(shape.triangle("hollow",[6]),expectOuts.triangleHollowRows);

    console.log("  Testing alternatingRows");
    assert.deepStrictEqual(shape.triangle("alternating",[6]),expectOuts.triangleAlternatingRows);

    console.log(".Testing Triangle");
};

const testDiamond = function(){
    console.log("Testing Diamond.");

    console.log("  Testing filled Rows");
    assert.deepStrictEqual(shape.diamond("filled",[5]),expectOuts.diamondFilledRows);

    console.log("  Testing hollowRows");
    assert.deepStrictEqual(shape.diamond("hollow",[5]),expectOuts.diamondHollowRows);

    console.log("  Testing alternatingRows");
    assert.deepStrictEqual(shape.diamond("alternating",[5]),expectOuts.diamondAlternatingRows);

    console.log(".Testing Diamond");
};

const runTests = function(){
    console.log("Testing shape.js...");
    testRectangle();
    testTriangle();
    testDiamond();
    console.log("...Testing shape.js");
};

runTests();
