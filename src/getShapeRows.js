const shape = require('./shape.js');

const getShapeRows = function(shapeType, patternType, dimension){
    return shape[shapeType](patternType,dimension);    
};

exports.getShapeRows = getShapeRows;
