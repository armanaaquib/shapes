const utils = require('./utils.js');
const mapper = require('./mapper.js');

const filledRows= function(len){
    const rangeList = utils.range(1, len + 1);
    return rangeList.map(mapper.filledRow);
};

const hollowRows= function(len){
    const rangeList = utils.range(1, len + 1);
    return rangeList.map(mapper.hollowRow);
};

const alternatingRows= function(len){
    const rangeList = utils.range(1, len + 1);
    return rangeList.map(mapper.alternatingRow);
};

const interlacedRows = function(len){
    const rangeList = utils.range(1, len + 1);
    return rangeList.map(mapper.interlacedRow);
};

exports.filled = filledRows;
exports.hollow = hollowRows;
exports.alternating = alternatingRows;
exports.interlaced = interlacedRows;
