// const userName = 'Jordan';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let age = 30;
// age = 31;
// let & const
// function add(a: number, b: number){
//     let result;
//     result = a + b;
//     return result;
// }
// if (age > 25) {
//     var isOld = true;
// }
// console.log(isOld);
// arrow functions 
// const add = (a: number, b: number) => {
//     return a + b;
// }
// default arguments like that seen in b need to be the last parameter
// i.e. if you made a have a default it would not work like below
//const add = (a: number = 1, b: number ) => a + b;
// const add = (a: number, b: number = 1) => a + b;
// console.log(add(2, 5));
// const printOutput = (output: string | number) => console.log(output);
//alternatively
// const printOutput: (a: number | string) => void = output => console.log(output);
// const button = document.querySelector('button');
// if (button) {
//     button.addEventListener('click', event => console.log(event))
// }
// printOutput(add(5));
var hobbies = ['Soccer', 'League'];
var activeHobbies = ['Biking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    firstName: 'Jordan',
    age: 30
};
var copiedPerson = __assign({}, person);
// rest parameters used to accept any number of arguments
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
// object destructuring
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
//for object destructuring you have you use the correct
//key values when destructuring it is not arbitrary
var userName = person.firstName, age = person.age;
console.log(userName, age, person);
