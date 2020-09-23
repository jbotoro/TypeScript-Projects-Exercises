class Department {
    name: string ;

    constructor(n: string) {
        this.name = n;
    }
}

const engineering = new Department('Engineering');
console.log(engineering);