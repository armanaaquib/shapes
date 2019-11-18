const util = require('./utils.js');

const filledRow = function(len){
    return '*'.repeat(len);
};

const hollowRow = function(len, index, list){
    if(len < 2 || index == 0 || index == list.length - 1){
        return '*'.repeat(len);
    }

    return '*'+' '.repeat(len-2)+'*';
};

const alternatingRow = function(len, index){
    if(index % 2 == 0){
        return '-'.repeat(len);
    }

    return '+'.repeat(len);
};

const interlacedRow = function(len, index){
    const rangeList = util.range(1, len + 1);
    rangeList.fill(1);
    const row = rangeList.map(alternatingRow).join("");
    
    if(index % 2 == 0){
        return '+' + row.slice(0,-1); 
    }
    return row;
};

const hollowRowWithArgs = function(firstChar, lastChar){
    return function(len){
        return firstChar + ' '.repeat(len-2) + lastChar;
    }
};

const addSpaces = function(highestRowLength){
    return function(row){
        return " ".repeat((highestRowLength - row.length)/2)+row;
    }
};

exports.filledRow = filledRow;
exports.hollowRow = hollowRow;
exports.alternatingRow = alternatingRow;
exports.interlacedRow = interlacedRow;
exports.addSpaces = addSpaces;
exports.hollowRowWithArgs = hollowRowWithArgs;
