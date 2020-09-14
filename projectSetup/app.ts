function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect Input Type!!')
    // }
    const result = n1 + n2;
    if (showResult){
        console.log(resultPhrase + result);
    } else {
        return result;
    }
}

const number1 = 5;
// vs const number1 = '5' ==> 52.8
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase);
