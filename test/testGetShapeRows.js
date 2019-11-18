const getShapeRows = require('../src/getShapeRows.js').getShapeRows;
const assert = require('assert');
const expectOuts = require('./expectedOutputs.js');

const runTests = function(){
    console.log("Testing getShapeRows...");

    console.log("   Testing Rectangles");
    assert.deepStrictEqual(getShapeRows("rectangle","filled",[3,9]),expectOuts.rectangleFilledRows);
    assert.deepStrictEqual(getShapeRows("rectangle","hollow",[3,9]),expectOuts.rectangleHollowRows);
    assert.deepStrictEqual(getShapeRows("rectangle","alternating",[3,9]),expectOuts.rectangleAlternatingRows);
    assert.deepStrictEqual(getShapeRows("rectangle","interlaced",[3,9]),expectOuts.rectangleInterlacedRows);

    console.log("   Testing Triangles");
    assert.deepStrictEqual(getShapeRows("triangle","filled",[6]),expectOuts.triangleFilledRows);
    assert.deepStrictEqual(getShapeRows("triangle","hollow",[6]),expectOuts.triangleHollowRows);
    assert.deepStrictEqual(getShapeRows("triangle","alternating",[6]),expectOuts.triangleAlternatingRows);
    assert.deepStrictEqual(getShapeRows("triangle","interlaced",[6]),expectOuts.triangleInterlacedRows);

    console.log("   Testing Diamond shapeTypes");
    assert.deepStrictEqual(getShapeRows("diamond","filled",[5]),expectOuts.diamondFilledRows);
    assert.deepStrictEqual(getShapeRows("diamond","hollow",[5]),expectOuts.diamondHollowRows);
    assert.deepStrictEqual(getShapeRows("diamond","alternating",[5]),expectOuts.diamondAlternatingRows);
    assert.deepStrictEqual(getShapeRows("diamond","interlaced",[5]),expectOuts.diamondInterlacedRows);

    console.log("...Testing getShapeRows");
};

runTests();
