//Union Types are allow for multiple types of input to work 
// i.e here we allow inputs 1 and 2 to be a number or a string
// additionally we add runtime type check to make sure we have different
// functionality based on the type of input
function combine(input1, input2, resultType) {
    var result;
    // runtime type check below
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(20, 36, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('20', '36', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Jordan', 'Ashley', 'as-text');
console.log(combinedNames);
