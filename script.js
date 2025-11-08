// Query input element to modify and get numbers
const input = document.querySelector("input");
// Query all relevant operators
const operators = document.querySelectorAll(".operators-btn");
// Query all relevant numbers
const numbers = document.querySelectorAll(".numbers-btn");
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

// Clear function by setting everything to NULL
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  window.location.reload();
});

// Logic to add numbers according to the requirements (1 floating number or not)
numbers.forEach((number) => {
  let content;
  let text;
  number.addEventListener("click", (e) => {
    content = e.target;
    text = content.textContent;
    if (text === ".") {
      input.value += text;
      number.disabled = true;
    } else if (text !== "=") {
      input.value += text;
    }
  });
});

// Main 4 operations
const add = (number1, number2) => {
  if (input.value.includes(".")) {
    result = parseFloat(number1) + parseFloat(number2);
    input.value = result.toFixed(1);
  } else {
    result = parseInt(number1) + parseInt(number2);
    input.value = result;
  }
};
const subtract = (number1, number2) => {
  if (input.value.includes(".")) {
    result = parseFloat(number1) - parseFloat(number2);
    input.value = result.toFixed(1);
  } else {
    result = parseInt(number1) - parseInt(number2);
    input.value = result;
  }
};
const multiply = (number1, number2) => {
  if (input.value.includes(".")) {
    result = parseFloat(number1) * parseFloat(number2);
    input.value = result.toFixed(1);
  } else {
    result = parseInt(number1) * parseInt(number2);
    input.value = result;
  }
};
const divide = (number1, number2) => {
  result = parseInt(number1) / parseInt(number2);
  let rounded = result.toFixed(1);
  input.value = parseFloat(rounded);
};

// Main operate function
const operate = (number1, operator, number2) => {
  if (operator === "+") return add(number1, number2);
  else if (operator === "-") return subtract(number1, number2);
  else if (operator === "×") return multiply(number1, number2);
  else if (operator === "÷") return divide(number1, number2);
};

const separator = (operator) => {
  if (!input.value.includes(operator)) {
    number1 = input.value;
    input.value += operator;
  } else if (input.value.includes(operator)) {
    let expression = input.value.split(operator);
    number2 = expression[1];
    operate(number1, operator, number2);
  }
};

// Calculate all values if operators are directly clicked
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    content = e.target.textContent;
    // Start with actual calculation
    if (content === "+") {
      if (input)
      separator(content);
    } else if (content === "-") {
      separator(content);
    } else if (content === "×") {
      separator(content);
    } else if (content === "÷") {
      separator(content);
    } else {
      if (input.value.includes("+")) {
        index = input.value.indexOf("+");
        separator(input.value[index]);
      } else if (input.value.includes("-")) {
        index = input.value.indexOf("-");
        separator(input.value[index]);
      } else if (input.value.includes("÷")) {
        index = input.value.indexOf("÷");
        separator(input.value[index]);
      } else if (input.value.includes("×")) {
        index = input.value.indexOf("×");
        separator(input.value[index]);
      }
    }
  });
});
