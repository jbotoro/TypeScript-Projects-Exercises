// const userName = 'Jordan';

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

const hobbies = ['Soccer', 'League'];
const activeHobbies = ['Biking'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Jordan',
    age: 30
};

const copiedPerson = {...person};

// rest parameters used to accept any number of arguments
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
// object destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

//for object destructuring you have you use the correct
//key values when destructuring it is not arbitrary
const { firstName: userName, age } = person;

console.log(userName, age, person);