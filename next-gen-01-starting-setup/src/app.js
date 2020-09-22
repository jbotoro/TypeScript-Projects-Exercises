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
var userName = 'Jordan';
var age = 30;
age = 31;
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
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
console.log(add(2, 5));
// const printOutput = (output: string | number) => console.log(output);
//alternatively
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5));
var hobbies = ['Soccer', 'League'];
var activeHobbies = ['Biking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    name: 'Jordan',
    age: 30
};
var copiedPerson = __assign({}, person);
