type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};


// intersection types combined with object types
// can be useful
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Jordan',
    privileges: ['create-server'],
    startDate: new Date()
}

console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }

    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name)
    if ('privileges' in emp){
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp){
        console.log('Start Date: ' + emp.startDate)
    }
    
}

// since no privileges inputed we dont print out any info regarding
// privileges
printEmployeeInformation({
    name: 'Jordan',
    startDate: new Date()
})


class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo...' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000)
    // }

    // another way to do the above is to utilize instanceof
    // as seen below
    // Type Guarding 


    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){

    // (animal instanceof Bird) doesnt work because you cant use
    // instance of with interfaces

    // if('flyingSpeed' in animal){
    //     console.log('Moving with speed: ' + animal.flyingSpeed)
    // }

    //another way to do the above is to use literal types in our interfaces

    let speed;

    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    
    console.log('Moving with speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})