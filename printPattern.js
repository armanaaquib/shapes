const getShape = require('./src/getShape.js').getShape;

const printPattern = function(){
    shapePatternOptions = process.argv.slice(2);
    console.log(getShape(shapePatternOptions));
};
    
printPattern();
