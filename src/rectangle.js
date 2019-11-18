const utils = require('./utils.js');
const mapper = require('./mapper.js');

const filledRows= function(rows, cols){
    const rangeList = utils.range(1, rows + 1);
    rangeList.fill(cols);
    return rangeList.map(mapper.filledRow);
};

const hollowRows= function(rows, cols){
    const rangeList = utils.range(1, rows + 1);
    rangeList.fill(cols);
    return rangeList.map(mapper.hollowRow);
};

const alternatingRows= function(rows, cols){
    const rangeList = utils.range(1, rows + 1);
    rangeList.fill(cols);
    return rangeList.map(mapper.alternatingRow);
};

const interlacedRows = function(rows, cols){
    const rangeList = utils.range(1, rows + 1);
    rangeList.fill(cols);
    return rangeList.map(mapper.interlacedRow);
};

exports.filled = filledRows;
exports.hollow = hollowRows;
exports.alternating = alternatingRows;
exports.interlaced = interlacedRows;
