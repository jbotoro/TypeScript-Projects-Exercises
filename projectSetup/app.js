var userInput;
var userName;
userInput = 5;
userInput = 'Max';
//if using unknown type an extra type check is required
// before you can assign to userName to equal userInput
if (typeof userInput === 'string') {
    userName = userInput;
}
;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
