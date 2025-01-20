function calculator(firstNumber, operator, secondNumber) {
    let result = 0
    if (operator === `+`) {
        result += firstNumber + secondNumber
        console.log(`${result.toFixed(2)}`);
    } else if (operator === `-`) {
        result += firstNumber - secondNumber
        console.log(`${result.toFixed(2)}`);
    } else if (operator === `/`) {
        result += firstNumber / secondNumber
        console.log(`${result.toFixed(2)}`);
    } else if (operator === `*`) {
        result += firstNumber * secondNumber
        console.log(`${result.toFixed(2)}`);
    }
}
calculator(25.5,
    '-',
    3
)
