const userName = 'Jordan';

let age = 30;

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

const add = (a: number, b: number) => a + b;

console.log(add(2, 5));

// const printOutput = (output: string | number) => console.log(output);
//alternatively

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event))
}

printOutput(add(5, 2));