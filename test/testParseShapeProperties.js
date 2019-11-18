const parseShapeProperties = require('../src/parseShapeProperties.js').parseShapeProperties;
const assert = require('assert');

const shapeTests = function(){
    console.log("Testing Shape Options...");
    assert.deepStrictEqual(parseShapeProperties(["-s","randomshape"]), undefined);
    assert.deepStrictEqual(parseShapeProperties(["-s","triangle","-d","5"]), {'-s':'triangle','-p':'filled','-d':[5]});
    console.log("...Testing Shape Options");
};

const patternTests = function(){
    console.log("Testing Pattern Options...");
    assert.deepStrictEqual(parseShapeProperties(["-p","randompattern"]), undefined);
    assert.deepStrictEqual(parseShapeProperties(["-p","filled"]), {'-s':'rectangle','-p':'filled','-d':[5,5]});
    console.log("...Testing Pattern Options");
};

const dimensionTests = function(){
    console.log("Testing Dimension Options...");
    assert.deepStrictEqual(parseShapeProperties(["-d","r,w"]), undefined);
    assert.deepStrictEqual(parseShapeProperties(["-d","3,4"]), {'-s':'rectangle','-p':'filled','-d':[3,4]});
    console.log("...Testing Dimension Options");
};

const runTests = function(){
    shapeTests();
    patternTests();
    dimensionTests();
};

runTests();
