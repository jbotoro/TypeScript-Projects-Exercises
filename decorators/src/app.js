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
// by using factory function we can pass in a custom logging message
// as seen below
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Jordan';
        console.log('Creating person object...');
    }
    Person = __decorate([
        Logger('LOGGIN - PERSON')
    ], Person);
    return Person;
}());
var pers = new Person();
console.log(pers);
