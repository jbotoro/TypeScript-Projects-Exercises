// Generic types
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// const names: Array<string> = []; //string[]
// // names[0].split(' ');
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });
// promise.then(data => {
//     data.split(' ');
// })
// creating a generic type
// by using a generic type we allow the specific types to be set when we call
// the function , typescript then infers that the generic type 'T' refers
// to an object with a name property(which is a string) and likewise that type 'U' refers
// to an object with an age property(which is a number)
// typescript then infers that the result type must the be combination of an object with a  number
// property and an object with a string property
// by using the extends objects in our generic types we avoid a silent failure
// as seen in the  first version of mergedObject, without type constraints
// typescript will not detect that 31 is a number not an object
// and the function merge should only be merging objects
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// const mergedObject = merge({name: 'Jordan', hobbies: ['Soccer']}, 31 );
var mergedObject = merge({ name: 'Jordan', hobbies: ['Soccer'] }, { age: 31 });
function countAndDescribe(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements!';
    }
    return [element, descriptionText];
}
// console.log(countAndDescribe(['Soccer', 'LoL']));
// using keyof constraint
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Jordan' }, 'name');
// by extending our DataStorage class to only accept
// primitive types (so that our indexOf function works when removing an item)
// to store objects we might consider using a more specialized class
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        // check to see if item exists, if not (i.e it returns -1)
        // we just return so as not to remove the wrong item
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
// by specifying the generic class to only store type string the below addition 
// of a  number will not work
// textStorage.addItem(10);
textStorage.addItem('Jordan');
textStorage.addItem('Ashley');
textStorage.removeItem('Jordan');
console.log(textStorage.getItems());
// by using generic types we outline a clear distinct data storage object
// to store strings in the first textStorage object
// and a separate object numberStorage to only store numbers
// additionally a union type could be used to offer additional type
// flexibility 
var numberStorage = new DataStorage();
// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Jordan'});
// objStorage.addItem({name: 'Ashley'});
// //...
// objStorage.removeItem({name: 'Jordan'});
// console.log(objStorage.getItems());
