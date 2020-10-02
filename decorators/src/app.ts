// decorator runs when JS finds constructor function definition

// i.e. when the class is defined, not when it is instantiated
// thus the logger function is logged before the creating person object


// by converting our decorator function into a factory function
// wee allow for further customization and reuseability

function Logger(logString: string) {
    console.log('LOGGER FACTORY')
    return function(constructor: Function){
        console.log(logString)
        console.log(constructor)
    };
}

// more advanced types of decorator seen below
    

function WithTemplate(template: string, hookId: string){
    console.log('TEMPLATE FACTORY')
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
@Logger('LOGGIN - PERSON')
@WithTemplate('<h1> My Person Object </h1>', 'app')

// by using factory function we can pass in a custom logging message
// as seen below


class Person {
    name = 'Jordan';

    constructor(){
        console.log('Creating person object...')
    }
}

const pers = new Person();
console.log(pers);

//

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator...')
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number){
    console.log('Parameter decorator!')
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product {

    @Log    
    
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
        if (val > 0){
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax);
    }
}

// When do decorators execute?
// Decorators execute when the class is defined, not when an instance of the class
// is instantiated 

const p1 = new Product('Book', 19);
const p2 = new Product('Book2', 20);
