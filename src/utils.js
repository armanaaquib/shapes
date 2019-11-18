const range = function(start, end, step){

    if(end === undefined){
        end = start;
        start = 0;
    }

    if(step === undefined){
        step = 1;
    }

    const rangeList = [];
    let value = start;
    while((value < end && step > 0)||(value > end && step < 0)){
        rangeList.push(value);
        value += step;
    }

    return rangeList;
};

exports.range = range;
