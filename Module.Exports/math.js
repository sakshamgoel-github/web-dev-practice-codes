square = x => x*x;
const ans = "Maths is great...";

/*
First way of exporting : 
    module.exports.square = square;
    module.exports.ans = ans;

Second way of exporting :
    const math ={
        square : square,
        ans : ans
    };
    module.exports = math;

Third Way of exporting :
    module.exports.square = x => x*x;
    module.exports.ans = "Maths is great...";
*/

