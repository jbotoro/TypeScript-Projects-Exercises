var person = {
    name: 'Jordan',
    age: 30,
    hobbies: ['Sports', 'Video Games']
};
var favoriteActivities;
// you can use any[] type when using a mixed type array i.e. numbers and strings etc.
// not preferable because harder to catch errors with an any catch all
favoriteActivities = ['Snowboarding'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    console.log(hobby.map());
}
