const getShapeRows = require('./getShapeRows.js').getShapeRows;
const parseShapeProperties = require('./parseShapeProperties.js').parseShapeProperties;

const getShape = function(shapePatternOptions){

    if(! parseShapeProperties(shapePatternOptions)){
        let usage = "usage: node filename.js [-s rectangle|triangle]";
        usage += " [-p filled|hollow|alternating] [-d noOfRows,noOfCols|noOfRows]";
        return usage;
    }

    const shapeProperties = parseShapeProperties(shapePatternOptions);
    return getShapeRows(shapeProperties['-s'], shapeProperties['-p'], shapeProperties['-d']).join("\n");
};

exports.getShape = getShape;
