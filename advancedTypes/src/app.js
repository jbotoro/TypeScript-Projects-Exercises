var _a;
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
var result = add('Jordan', 'Black');
result.split(' ');
var fetchedUserData = {
    id: 'u1',
    name: 'Jordan',
    job: { title: 'CEO', description: 'My own company' }
};
// syntax below is called optional chaining
// basically performing if checks on the object 
// checking if job exists in user data and if so checking if title exists
// and then if it passes those if checks than it is logged to the console
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// console.log(fetchedUserData.job && fetchedUserData.job.title);
// empty string is falsey so if using the code below
// const storedData = userInput || 'DEFAULT';
// we will always hit our default value if the input is an empty string
var userInput = '';
// nullish coalescing operator
// if userInput is null or undefined we will use the default fallback
// thus this operator provides a way to gracefull deal with nullish or undefined 
// values such as when userInput is an empty string
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name)
//     if ('privileges' in emp){
//         console.log('Privileges: ' + emp.privileges)
//     }
//     if ('startDate' in emp){
//         console.log('Start Date: ' + emp.startDate)
//     }
// }
// // since no privileges inputed we dont print out any info regarding
// // privileges
// printEmployeeInformation({
//     name: 'Jordan',
//     startDate: new Date()
// })
// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }
// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }
//     loadCargo(amount: number){
//         console.log('Loading cargo...' + amount)
//     }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     // if('loadCargo' in vehicle){
//     //     vehicle.loadCargo(1000)
//     // }
//     // another way to do the above is to utilize instanceof
//     // as seen below
//     // Type Guarding 
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000)
//     }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//     type: 'bird';
//     flyingSpeed: number
// }
// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal){
//     // (animal instanceof Bird) doesnt work because you cant use
//     // instance of with interfaces
//     // if('flyingSpeed' in animal){
//     //     console.log('Moving with speed: ' + animal.flyingSpeed)
//     // }
//     //another way to do the above is to use literal types in our interfaces
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving with speed: ' + speed)
// }
// moveAnimal({type: 'bird', flyingSpeed: 10})
// // const paragraph = document.querySelector('p');
// // const paragraph = document.getElementById('message-output');
// // const userInputValue = <HTMLInputElement>document.getElementById('user-input');
// // an alternative way to do the above can be done as seen below
// // using the as keyword
// // without using one of the two methods typescript will not allow for last line to work
// // because the value could return null
// // these additions ensure that the element will always be a HTMLInputElement
// const userInputValue = document.getElementById('user-input');
// if (userInputValue){
//     (userInputValue as HTMLInputElement).value = 'Hi there!';
// }
// interface ErrorContainer {
//     //{ email: 'Not a valid email', username: 'Must start' with a capital character!}
//     [prop : string]: string;
// }
// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// };
