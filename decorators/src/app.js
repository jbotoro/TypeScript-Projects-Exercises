// decorator runs when JS finds constructor function definition
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// i.e. when the class is defined, not when it is instantiated
// thus the logger function is logged before the creating person object
// by converting our decorator function into a factory function
// wee allow for further customization and reuseability
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// more advanced types of decorator seen below
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (constructor) {
        var hookEl = document.getElementById(hookId);
        var p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
// our with template decorator allows for addition of html to a certain
// location in this case the div with the id of 'app'
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Jordan';
        console.log('Creating person object...');
    }
    Person = __decorate([
        Logger('LOGGIN - PERSON'),
        WithTemplate('<h1> My Person Object </h1>', 'app')
        // by using factory function we can pass in a custom logging message
        // as seen below
    ], Person);
    return Person;
}());
var pers = new Person();
console.log(pers);
//
function Log(target, propertyName) {
    console.log('Property decorator...');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('Invalid price - should be positive!');
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title");
    __decorate([
        Log2
    ], Product.prototype, "price");
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product.prototype, "getPriceWithTax");
    return Product;
}());
// When do decorators execute?
// Decorators execute when the class is defined, not when an instance of the class
// is instantiated 
var p1 = new Product('Book', 19);
var p2 = new Product('Book2', 20);
