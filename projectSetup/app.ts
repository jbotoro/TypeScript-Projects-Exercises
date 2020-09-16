//Union Types are allow for multiple types of input to work 
// i.e here we allow inputs 1 and 2 to be a number or a string
// additionally we add runtime type check to make sure we have different
// functionality based on the type of input

function combine(input1: number | string, input2: number | string){
    let result;

    // runtime type check below
    if( typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;
}

const combinedAges = combine(20,36);
console.log(combinedAges);

const combinedNames = combine('Jordan', 'Ashley')
console.log(combinedNames);