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
var add = function (a, b) { return a + b; };
console.log(add(2, 5));
// const printOutput = (output: string | number) => console.log(output);
//alternatively
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5, 2));
