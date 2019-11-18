const utils = require('./utils.js');
const mapper = require('./mapper.js');

const filledRows= function(len){
    const newLen = (len+1)/2;
    let rangeList = utils.range(1, len + 1, 2);
    rangeList = rangeList.concat(rangeList.slice(0,-1).reverse());
    let rows = rangeList.map(mapper.filledRow);
    rows = rows.map(mapper.addSpaces(len));
    return rows;
};

const hollowRows= function(len){
    const newLen = (len+1)/2;
    let rangeList = utils.range(1, len + 1, 2);
    rangeList = rangeList.concat(rangeList.slice(0,-1).reverse());
    let rows = rangeList.map(mapper.hollowRow);
    rows = rows.map(mapper.addSpaces(len));
    return rows;
};

const alternatingRows= function(len){
    const newLen = (len+1)/2;
    let rangeList = utils.range(1, len + 1, 2);
    rangeList = rangeList.concat(rangeList.slice(0,-1).reverse());
    let rows = rangeList.map(mapper.alternatingRow);
    rows = rows.map(mapper.addSpaces(len));
    return rows;
};

const interlacedRows = function(len){
    const newLen = (len+1)/2;
    let rangeList = utils.range(1, len + 1, 2);
    rangeList = rangeList.concat(rangeList.slice(0,-1).reverse());
    let rows = rangeList.map(mapper.interlacedRow);
    rows = rows.map(mapper.addSpaces(len));
    return rows;
};

const angledRows = function(len){

    if(len == 1){
        return ['*'];
    }

    const firstValue = mapper.addSpaces(len)('*');
    let rowMiddleFirst = utils.range(len,3, 2).map(mapper.hollowRowWithArgs('/','\\'));
    rowMiddleFirst = rowMiddleFirst.map(mapper.addSpaces(rowMiddleFirst.length*2 + 3));
    let rowMiddleLast = utils.range(1,len-2,-2).map(mapper.hollowRowWithArgs('\\','/'));
    rowMiddleLast = rowMiddleLast.map(mapper.addSpaces(rowMiddleLast.length*2 + 3));
    const rowMiddle = mapper.hollowRow(len,10,[1, 2,,3]);
    
    return [firstValue].concat(rowMiddleFirst).concat(rowMiddle).concat(rowMiddleLast).concat(firstValue);
};

//console.log(angledRows(9).join('\n'));
//console.log(angledRows(1).join('\n'));
//console.log(angledRows(3).join('\n'));
//console.log(angledRows(51).join('\n'));

exports.filled = filledRows;
exports.hollow = hollowRows;
exports.alternating = alternatingRows;
exports.interlaced = interlacedRows;
exports.angled = angledRows;
