abstract class Department {
    // private id: string;
    // private name: string ;
    //protected is like private but also extends to classes that inherit
    // from Department class
    static fiscalYear = 2020;

    protected employees: string[] = [];

    // readonly keyword makes it so you can't rewrite to that variable
    // i.e. use it when the property will never change or you dont want it to

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name: string) {
        return {name: name}
    }

    abstract describe(this: Department): void;

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
    admins: string[];

    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }

    describe(){
        console.log('IT Department - ID: ' + this.id) 
    }
}

class AccountingDepartment extends Department {

    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport){
            return this.lastReport;
        }
        
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!')
        }

        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0];
    }


    // using private constructor the singleton pattern can be implemented
    // to ensure only one instance of the Object exists at any one time
    static getInstance() {
        if(this.instance){
            return this.instance;
        }

        this.instance = new AccountingDepartment('D2', [])
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string) {
        if (name === 'Jordan'){
            return;
        }
        // by using protected instead of private in the Department class
        // it allows our AccountingDepartment class which inherits from
        // the Department class to have access to the employees array
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}


const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

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


const accounting = AccountingDepartment.getInstance();

// accounting.mostRecentReport = '';
// accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport);

accounting.addEmployee('Jordan');
accounting.addEmployee('Gareth');


accounting.describe();

// accounting.printEmployeeInformation();
// accounting.printReports();
// const engineeringCopy = { describe: engineering.describe }
// // by utilizing a class type on this we can avoid scenarios
// // where this is not referring to what we think it will
// // in this case when calling describe on engineeringCopy
// // this does not refer to the Department object but rather
// // it refers to the window, and so we get undefined instead of
// // the Department name printed to the console.
// engineeringCopy.describe();