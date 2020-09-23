class Department {
    name: string ;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const engineering = new Department('Engineering');
// console.log(engineering);

engineering.addEmployee('Jordan');
engineering.addEmployee('Ashley');

// to ensure that employees are added in a uniform way
// i.e. only added using the addEmployee function
// we add private to the employees property of the Department class
// effectively only allowing access the employees within the class itself
// and making things like the insertion method below, invalid.
// engineering.employees[2] = 'Bella';

engineering.describe();
engineering.printEmployeeInformation();

// const engineeringCopy = { describe: engineering.describe }
// // by utilizing a class type on this we can avoid scenarios
// // where this is not referring to what we think it will
// // in this case when calling describe on engineeringCopy
// // this does not refer to the Department object but rather
// // it refers to the window, and so we get undefined instead of
// // the Department name printed to the console.
// engineeringCopy.describe();