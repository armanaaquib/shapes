const triangle = require('./triangle.js');
const rectangle = require('./rectangle.js');
const diamond = require('./diamond.js');

const getTriangleRows = function(patternType, dimension){
    return triangle[patternType](dimension[0]);
};

const getRectangleRows = function(patternType, dimension){
    return rectangle[patternType](dimension[0], dimension[1]);
};

const getDiamondRows = function(patternType, dimension){
    return diamond[patternType](dimension[0]);
};

exports.triangle = getTriangleRows;
exports.rectangle = getRectangleRows;
exports.diamond = getDiamondRows;
