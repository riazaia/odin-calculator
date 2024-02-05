function add(a: number, b: number) {
  if (!isValidInput(a, b)) {
    return "Invalid input";
  }
  return a + b;
}

function subtract(a: number, b: number) {
  if (!isValidInput(a, b)) {
    return "Invalid input";
  }
  return a - b;
}

function multiply(a: number, b: number) {
  if (!isValidInput(a, b)) {
    return "Invalid input";
  }
  return a * b;
}

function divide(a: number, b: number) {
  if (!isValidInput(a, b)) {
    return "Invalid input";
  }
  return a / b;
}

function isValidInput(a: any, b: any) {
  if ((isNaN(a) || isNaN(b)) === true) {
    return false;
  } else {
    return true;
  }
}

let firstNumber: number = 0;
let secondNumber: number = 0;
let operator: string;

function operate(symbol: string, num0: number, num1: number) {
  let result;
  switch (symbol) {
    case "+":
      result = add(num0, num1);
      break;
    case "-":
      result = subtract(num0, num1);
      break;
    case "*":
      result = multiply(num0, num1);
      break;
    case "/":
      result = divide(num0, num1);
      break;
    default:
      "Cannot complete operation";
      break;
  }
  return result;
}

let calculator = document.querySelector(".calculator");
let display = document.querySelector(".display");

let numbers = document.querySelectorAll(".numbers>button[data-value]");
let operators = document.querySelectorAll(".controls>button[data-value]");

numbers.forEach((element) => {
  element.addEventListener("click", inputNumber);
});

operators.forEach((element) => {
  element.addEventListener("click", inputOperation);
});

let previousValue = null;
let currentValue = null;
let displayValue = null;

function updateDisplay(event) {
  display.textContent = `${display.textContent} ${event.target.textContent}`;
}

function inputNumber(event) {
  let buttonValue = event.target.textContent;

  display.textContent = buttonValue;

  /*   if (currentValue === null && previousValue !== null) {
    currentValue = buttonValue;
    display.textContent = `${previousValue} ${operator} ${currentValue}`;
  } else {
    currentValue += buttonValue;
  }

  display.textContent = currentValue; */
}

function inputOperation(event) {
  operator = event.target.textContent;

  display.textContent = operator;
}
