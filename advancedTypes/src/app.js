var e1 = {
    name: 'Jordan',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
// since no privileges inputed we dont print out any info regarding
// privileges
printEmployeeInformation({
    name: 'Jordan',
    startDate: new Date()
});
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000)
    // }
    // another way to do the above is to utilize instanceof
    // as seen below
    // Type Guarding 
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    // (animal instanceof Bird) doesnt work because you cant use
    // instance of with interfaces
    // if('flyingSpeed' in animal){
    //     console.log('Moving with speed: ' + animal.flyingSpeed)
    // }
    //another way to do the above is to use literal types in our interfaces
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// const paragraph = document.querySelector('p');
// const paragraph = document.getElementById('message-output');
// const userInputValue = <HTMLInputElement>document.getElementById('user-input');
// an alternative way to do the above can be done as seen below
// using the as keyword
// without using one of the two methods typescript will not allow for last line to work
// because the value could return null
// these additions ensure that the element will always be a HTMLInputElement
var userInputValue = document.getElementById('user-input');
if (userInputValue) {
    userInputValue.value = 'Hi there!';
}
var errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
