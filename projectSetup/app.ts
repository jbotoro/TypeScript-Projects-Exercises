
const person = {
    name: 'Jordan',
    age: 30,
    hobbies: ['Sports', 'Video Games']
};

let favoriteActivities: string[];

// you can use any[] type when using a mixed type array i.e. numbers and strings etc.
// not preferable because harder to catch errors with an any catch all
favoriteActivities = ['Snowboarding']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    console.log(hobby.map())
}

