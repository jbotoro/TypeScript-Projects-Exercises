class Department {
    name: string ;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name)
    }
}

const engineering = new Department('Engineering');
console.log(engineering);
engineering.describe();

const engineeringCopy = { describe: engineering.describe }
// by utilizing a class type on this we can avoid scenarios
// where this is not referring to what we think it will
// in this case when calling describe on engineeringCopy
// this does not refer to the Department object but rather
// it refers to the window, and so we get undefined instead of
// the Department name printed to the console.
engineeringCopy.describe();