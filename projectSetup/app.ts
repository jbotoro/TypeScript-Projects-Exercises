const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Jordan',
    age: 30,
    hobbies: ['Sports', 'Video Games'],
    role: [2, 'Software Engineer']
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

