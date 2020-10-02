// decorator runs when JS finds constructor function definition
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// i.e. when the class is defined, not when it is instantiated
// thus the logger function is logged before the creating person object
// by converting our decorator function into a factory function
// wee allow for further customization and reuseability
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// more advanced types of decorator seen below
function WithTemplate(template, hookId) {
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
        WithTemplate('<h1> My Person Object </h1>', 'app')
        // by using factory function we can pass in a custom logging message
        // as seen below
        // @Logger('LOGGIN - PERSON')
    ], Person);
    return Person;
}());
var pers = new Person();
console.log(pers);
