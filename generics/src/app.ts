
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
function merge<T, U>(objA: T, objB: U){
    return Object.assign(objA, objB);
}


const mergedObject = (merge({name: 'Jordan'}, {age: 31}));

console.log(mergedObject.age)
