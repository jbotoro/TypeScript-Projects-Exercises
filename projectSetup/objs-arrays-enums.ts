
// this is a fine convention but can be improved via enum
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR};
// enum by default gives sequential numbers to the properties ie ADMIN = 0, READ_ONLY = 1 etc
// but you can reassign to anything like this
// enum Role {ADMIN = 'admin', READ_ONLY = 100, AUTHOR = 500} etc


// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } 
const person = {
    name: 'Jordan',
    age: 30,
    hobbies: ['Sports', 'Video Games'],
    // role: ADMIN
    // above ok when not using enum
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];

// you can use any[] type when using a mixed type array i.e. numbers and strings etc.
// not preferable because harder to catch errors with an any catch all
favoriteActivities = ['Snowboarding']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // Typescript type inference helps detect that map does not work on a string
    // so map cannot be called a hobby bc its a string not an array
    // console.log(hobby.map())
}

if (person.role === Role.ADMIN){
    console.log('is admin')
}

