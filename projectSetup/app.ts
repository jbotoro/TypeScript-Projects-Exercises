let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
//if using unknown type an extra type check is required
// before you can assign to userName to equal userInput
if (typeof userInput === 'string'){
    userName = userInput
};

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // never can also be used with a while(true) infinite loop
    // bc it will never return anything
}

generateError('An error occured!', 500);