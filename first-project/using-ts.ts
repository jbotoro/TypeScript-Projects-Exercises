const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
    // : number tells compiler to expect num1 and num2 to be integers
    return num1 + num2;
}

button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value));
    // + in front of number as a string converts it to an integer
});
