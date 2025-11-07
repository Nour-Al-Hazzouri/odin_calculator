const input= document.querySelector('input');
// Input accepts only characters defined in the array
input.addEventListener('keydown', e => {
    const allowedChars = ['+', '-', '/', '*', '.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
        'Backspace', 'ArrowLeft', 'ArrowRight']; // Define characters to prevent
    if (!allowedChars.includes(e.key)) {
        e.preventDefault(); // Prevent the character from being typed
    }
})

const clear= document.querySelector(".clear");
clear.addEventListener("click", e => {
    number1= 0;
    number2= 0;
    input.value= '';
    operator= '';
})

// The 3 main variables to contain the numbers operator
let number1= 0;
let operator;
let number2= 0;

// The 4 main operations
const add= (number1, number2) => {
    return number1 + number2;
};
const subtract= (number1, number2) => {
    return number1 - number2;
};
const multiply= (number1, number2) => {
    return number1 * number2;
};
const divide= (number1, number2) => {
    return number1 / number2;
};

// The main function to accept 2 numbers and 1 operator to do the math for the calculator
const operate= (number1, operator, number2) => {
    if (operator === '+') {
        return add(number1, number2)
    }
    if (operator === '-') {
        return subtract(number1, number2);
    }
    if (operator === '*' || operator === '×') {
        return multiply(number1, number2);
    }
    if (operator === '/' || operator === '÷') {
        return divide(number1, number2);
    }
};

