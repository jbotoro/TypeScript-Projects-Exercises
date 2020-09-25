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