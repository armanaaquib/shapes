const utils = require('../src/utils.js');
const assert = require('assert');

const testRange = function(){
    it("Sholuld return 0 to end-1 if only end given", function(){
        assert.deepStrictEqual(utils.range(0),[]);
        assert.deepStrictEqual(utils.range(1),[0]);
        assert.deepStrictEqual(utils.range(5),[0,1,2,3,4]);
    });

    it("Sholuld return start to end-1 if start and end given", function(){
        assert.deepStrictEqual(utils.range(0,0),[]);
        assert.deepStrictEqual(utils.range(0,1),[0]);
        assert.deepStrictEqual(utils.range(1,5),[1,2,3,4]);
    });

    it("Should work for positive Step", function(){
        assert.deepStrictEqual(utils.range(1,10,2),[1,3,5,7,9]);
        assert.deepStrictEqual(utils.range(4,21,5),[4,9,14,19]);
    });

    it("Should work for negative Step", function(){
        assert.deepStrictEqual(utils.range(10,1,-2),[10,8,6,4,2]);
        assert.deepStrictEqual(utils.range(20,5,-5),[20,15,10]);
    });

    it("Should work for 0 Step", function(){
        assert.deepStrictEqual(utils.range(10,1,0),[]);
        assert.deepStrictEqual(utils.range(20,5,0),[]);
    });
};

const runTests = function(){
    describe('Testing Range Function', testRange);
};

runTests();
