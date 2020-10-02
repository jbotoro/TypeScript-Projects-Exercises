// decorator runs when JS finds constructor function definition

// i.e. when the class is defined, not when it is instantiated
// thus the logger function is logged before the creating person object


// by converting our decorator function into a factory function
// wee allow for further customization and reuseability

function Logger(logString: string) {
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    };
}

// more advanced types of decorator seen below
    

function WithTemplate(template: string, hookId: string){
    return function(constructor: any){
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// our with template decorator allows for addition of html to a certain
// location in this case the div with the id of 'app'

@WithTemplate('<h1> My Person Object </h1>', 'app')

// by using factory function we can pass in a custom logging message
// as seen below

// @Logger('LOGGIN - PERSON')
class Person {
    name = 'Jordan';

    constructor(){
        console.log('Creating person object...')
    }
}

const pers = new Person();
console.log(pers);