const input = document.querySelector("input");
// Input accepts only characters defined in the array
input.addEventListener("keydown", (e) => {
  const allowedChars = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
  ];
  // Define characters to prevent
  if (!allowedChars.includes(e.key)) {
    e.preventDefault(); // Prevent the character from being typed
  }
});

// The 3 main variables to contain the numbers operator
let number1 = 0;
let operator;
let number2 = 0;
let result = 0;

// Clear function by setting everything to NULL
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  window.location.reload();
});

// The 4 main operations
const add = (number1, number2) => {
  return number1 + number2;
};
const subtract = (number1, number2) => {
  return number1 - number2;
};
const multiply = (number1, number2) => {
  return number1 * number2;
};
const divide = (number1, number2) => {
  return number1 / number2;
};

// The main function to accept 2 numbers and 1 operator to do the math for the calculator
const operate = (number1, operator, number2) => {
  if (operator === "+") {
    return add(number1, number2);
  }
  if (operator === "-") {
    return subtract(number1, number2);
  }
  if (operator === "*" || operator === "×") {
    return multiply(number1, number2);
  }
  if (operator === "/" || operator === "÷") {
    return divide(number1, number2);
  }
};

// Query all relevant numbers
const numbers = document.querySelectorAll(".numbers-btn");

// Logic to add numbers according to the requirements (floating number or not)
numbers.forEach((number) => {
  let content;
  let text;
  number.addEventListener("click", (e) => {
    content = e.target;
    text = content.textContent;
    if (text === "=") {
      if (!number1 || !number2 || !operator)
        alert("Make sure you selected 2 numbers and 1 operator");
    } else if (text === ".") {
      input.value += text;
      number.disabled = true;
    } else {
      input.value += text;
    }
  });
});

// Query all relevant operators
const operators = document.querySelectorAll(".operators-btn");

// Calculate all values if operators are directly clicked
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    content = e.target.textContent;
    if (content === "+") {
      if (!input.value.includes("+")) {
        number1 = input.value;
        input.value += content;
      } else if (input.value.includes("+")) {
        let expression = input.value.split("+");
        number2 = expression[1];
        if (input.value.includes(".")) {
          result = parseFloat(number1) + parseFloat(number2);
          input.value = result.toFixed(1);
        } else {
          result = parseInt(number1) + parseInt(number2);
          input.value = result;
        }
      }
    }
    if (content === "-") {
      if (!input.value.includes("-")) {
        number1 = input.value;
        input.value += content;
      } else if (input.value.includes("-")) {
        let expression = input.value.split("-");
        number2 = expression[1];
        if (input.value.includes(".")) {
          result = parseFloat(number1) - parseFloat(number2);
          input.value = result.toFixed(1);
        } else {
          result = parseInt(number1) - parseInt(number2);
          input.value = result;
        }
      }
    }
    if (content === "×") {
      if (!input.value.includes("×")) {
        number1 = input.value;
        input.value += content;
      } else if (input.value.includes("×")) {
        let expression = input.value.split("×");
        number2 = expression[1];
        if (input.value.includes(".")) {
          result = parseFloat(number1) * parseFloat(number2);
          input.value = result.toFixed(1);
        } else {
          result = parseInt(number1) * parseInt(number2);
          input.value = result;
        }
      }
    }
    if (content === "÷") {
      if (!input.value.includes("÷")) {
        number1 = input.value;
        input.value += content;
      } else if (input.value.includes("÷")) {
        let expression = input.value.split("÷");
        number2 = expression[1];
        result = parseInt(number1) / parseInt(number2);
        let rounded = result.toFixed(1);
        input.value = parseFloat(rounded);
      }
    }
  });
});
