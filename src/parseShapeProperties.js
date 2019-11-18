const isOptionValid = function(option){
    const options = ['-s','-p','-d'];
    return options.includes(option);
};

const getNumber = function(stringNumber){
    return +stringNumber;
};

const isPostitiveNumber = function(number){
    return Number.isInteger(+number) && +number > 0
};

const isShapeValid = function(shapeType){
    const shapeTypes = ["rectangle","triangle","diamond"];
    return shapeTypes.includes(shapeType);
};

const isPatternValid = function(patternType){
    const patternTypes = ["filled","hollow","alternating","interlaced","angled"];
    return patternTypes.includes(patternType);
};

const isDimensionValid = function(dimension){
    const rowCol = dimension.split(',');
    return rowCol.every(isPostitiveNumber);
};

const isRectangleDimensionInvalid = function(shapeType, dimension){
    return shapeType == 'rectangle' && dimension < 2;
};

const isDiamondDimensionInvalid = function(shapeType, dimension){
    return shapeType == 'diamond' && dimension % 2 == 0;
};

const isPatternTypeInvalid = function(shapeType, patternType){
    return shapeType != 'diamond' && patternType == 'angled';
};

const isInvalidProperties = function(shapeProperties){
    const shapeType = shapeProperties['-s'];
    const patternType = shapeProperties['-p'];
    const shapeDimension = shapeProperties['-d'].split(",");

    return isPatternTypeInvalid(shapeType, patternType) || isRectangleDimensionInvalid(shapeType, shapeDimension) || isDiamondDimensionInvalid(shapeType, shapeDimension);
};

const parseShapeProperties = function(userInputs){
    const shapeProperties = {
        "-s" : "rectangle",
        "-p" : "filled",
        "-d" : "5,5"
    };

    for(let index = 0; index < userInputs.length; index += 2){
        const isValidPair = {
            '-s' : isShapeValid,
            '-p' : isPatternValid,
            '-d' : isDimensionValid
        };

        const option = userInputs[index];
        const optionValue = userInputs[index + 1];

        if(! isOptionValid(option) || ! isValidPair[option](optionValue)){
            return undefined;
        }

        shapeProperties[option] = optionValue;
    }

    if(isInvalidProperties(shapeProperties)){
        return undefined;
    }

    const shapeDimension = shapeProperties['-d'].split(",");
    shapeProperties['-d'] = shapeDimension.map(getNumber);
    return shapeProperties;
};

exports.parseShapeProperties = parseShapeProperties;
//console.log(parseShapeProperties(["-s","triangle"]));
//console.log(parseShapeProperties(['-d','2,2','-d']));
//console.log(parseShapeProperties(['-s','triangle']));
//console.log(parseShapeProperties(['-p','angled','-s','diamond']));
//console.log(parseShapeProperties(['-p','angled']));
//console.log(parseShapeProperties(['-p','filled']));
