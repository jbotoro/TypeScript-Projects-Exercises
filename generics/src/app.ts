
// Generic types

// const names: Array<string> = []; //string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })


// creating a generic type
// by using a generic type we allow the specific types to be set when we call
// the function , typescript then infers that the generic type 'T' refers
// to an object with a name property(which is a string) and likewise that type 'U' refers
// to an object with an age property(which is a number)
// typescript then infers that the result type must the be combination of an object with a  number
// property and an object with a string property


// by using the extends objects in our generic types we avoid a silent failure
// as seen in the  first version of mergedObject, without type constraints
// typescript will not detect that 31 is a number not an object
// and the function merge should only be merging objects

function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}


// const mergedObject = merge({name: 'Jordan', hobbies: ['Soccer']}, 31 );
const mergedObject = merge({name: 'Jordan', hobbies: ['Soccer']}, { age: 31 });

console.log(mergedObject)


// Another Generic function

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if(element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements!'
    }
    return [element, descriptionText ]
}

console.log(countAndDescribe(['Soccer', 'LoL']));

