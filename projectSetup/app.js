// this is a fine convention but can be improved via enum
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } 
var person = {
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
var favoriteActivities;
// you can use any[] type when using a mixed type array i.e. numbers and strings etc.
// not preferable because harder to catch errors with an any catch all
favoriteActivities = ['Snowboarding'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // Typescript type inference helps detect that map does not work on a string
    // so map cannot be called a hobby bc its a string not an array
    // console.log(hobby.map())
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
