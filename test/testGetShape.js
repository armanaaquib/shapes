const getShape = require('../src/getShape.js').getShape;
const assert = require('assert');
const expectOuts = require('./expectedOutputs.js');

const testNoOptions = function(){
    console.log("  testNoOptions");
    assert.strictEqual(getShape(["-d","3,9"]),expectOuts.rectangleFilled);
};

const testOneOptions = function(){
    console.log("  testOneOptions");
    assert.strictEqual(getShape(["-s","rectangle","-d","3,9"]),expectOuts.rectangleFilled);
    assert.strictEqual(getShape(["-s","triangle","-d","6"]),expectOuts.triangleFilled);

    assert.strictEqual(getShape(["-p","filled","-d","3,9"]),expectOuts.rectangleFilled);
    assert.strictEqual(getShape(["-p","hollow","-d","3,9"]),expectOuts.rectangleHollow);
    assert.strictEqual(getShape(["-p","alternating","-d","3,9"]),expectOuts.rectangleAlternating);
};

const testTwoOptions = function(){
    console.log("   testTwoOptions");
    assert.strictEqual(getShape(["-s","rectangle","-p","filled","-d","3,9"]),expectOuts.rectangleFilled);
    assert.strictEqual(getShape(["-s","rectangle","-p","hollow","-d","3,9"]),expectOuts.rectangleHollow);
    assert.strictEqual(getShape(["-s","rectangle","-p","alternating","-d","3,9"]),expectOuts.rectangleAlternating);

    assert.strictEqual(getShape(["-s","triangle","-p","filled","-d","6"]),expectOuts.triangleFilled);
    assert.strictEqual(getShape(["-s","triangle","-p","hollow","-d","6"]),expectOuts.triangleHollow);
    assert.strictEqual(getShape(["-s","triangle","-p","alternating","-d","6"]),expectOuts.triangleAlternating);

    assert.strictEqual(getShape(["-p","filled","-s","rectangle","-d","3,9"]),expectOuts.rectangleFilled);
    assert.strictEqual(getShape(["-p","filled","-s","triangle","-d","6"]),expectOuts.triangleFilled);

    assert.strictEqual(getShape(["-p","hollow","-s","rectangle","-d","3,9"]),expectOuts.rectangleHollow);
    assert.strictEqual(getShape(["-p","hollow","-s","triangle","-d","6"]),expectOuts.triangleHollow);

    assert.strictEqual(getShape(["-p","alternating","-s","rectangle","-d","3,9"]),expectOuts.rectangleAlternating);
    assert.strictEqual(getShape(["-p","alternating","-s","triangle","-d","6"]),expectOuts.triangleAlternating);

    assert.strictEqual(getShape(["-p","filled","-d","5,9","-s","diamond"]),expectOuts.diamondFilled);
    assert.strictEqual(getShape(["-p","hollow","-d","5","-s","diamond"]),expectOuts.diamondHollow);
    assert.strictEqual(getShape(["-p","alternating","-d","5,5","-s","diamond"]),expectOuts.diamondAlternating);
    assert.strictEqual(getShape(["-p","interlaced","-d","5,5","-s","diamond"]),expectOuts.diamondInterlaced);

};

const runTests = function(){
    console.log('Testing getShape...');
    testNoOptions();
    testOneOptions();
    testTwoOptions();
    console.log('...Testing getShape');
};

runTests();
