class Department {
    // private id: string;
    // private name: string ;
    private employees: string[] = [];

    // readonly keyword makes it so you can't rewrite to that variable
    // i.e. use it when the property will never change or you dont want it to

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}` )
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

//class inheritance

class ITDepartment extends Department {

    constructor(id: string, public admins: string[]){
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}


const it = new ITDepartment( 'D1', ['Jordan']);
// console.log(engineering);

it.addEmployee('Jordan');
it.addEmployee('Ashley');

// to ensure that employees are added in a uniform way
// i.e. only added using the addEmployee function
// we add private to the employees property of the Department class
// effectively only allowing access the employees within the class itself
// and making things like the insertion method below, invalid.
// engineering.employees[2] = 'Bella';

it.describe();
it.printEmployeeInformation();
console.log(it);


const accounting = new AccountingDepartment('D2', []);
accounting.addReport('Something went wrong...')
accounting.printReports();
// const engineeringCopy = { describe: engineering.describe }
// // by utilizing a class type on this we can avoid scenarios
// // where this is not referring to what we think it will
// // in this case when calling describe on engineeringCopy
// // this does not refer to the Department object but rather
// // it refers to the window, and so we get undefined instead of
// // the Department name printed to the console.
// engineeringCopy.describe();