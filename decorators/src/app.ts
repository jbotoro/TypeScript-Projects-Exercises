// decorator runs when JS finds constructor function definition

// i.e. when the class is defined, not when it is instantiated
// thus the logger function is logged before the creating person object

function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor)
}

@Logger
class Person {
    name = 'Jordan';

    constructor(){
        console.log('Creating person object...')
    }
}

const pers = new Person();
console.log(pers);