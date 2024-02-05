function add(a, b) {
    if (!isValidInput(a, b)) {
        return "Invalid input";
    }
    return a + b;
}
function subtract(a, b) {
    if (!isValidInput(a, b)) {
        return "Invalid input";
    }
    return a - b;
}
function multiply(a, b) {
    if (!isValidInput(a, b)) {
        return "Invalid input";
    }
    return a * b;
}
function divide(a, b) {
    if (!isValidInput(a, b)) {
        return "Invalid input";
    }
    return a / b;
}
function isValidInput(a, b) {
    if ((isNaN(a) || isNaN(b)) === true) {
        return false;
    }
    else {
        return true;
    }
}
var firstNumber = 0;
var secondNumber = 0;
var operator;
function operate(symbol, num0, num1) {
    var result;
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
var calculator = document.querySelector(".calculator");
var display = document.querySelector(".display");
var numbers = document.querySelectorAll(".numbers>button[data-value]");
var operators = document.querySelectorAll(".controls>button[data-value]");
numbers.forEach(function (element) {
    element.addEventListener("click", inputNumber);
});
operators.forEach(function (element) {
    element.addEventListener("click", inputOperation);
});
var previousValue = null;
var currentValue = null;
var displayValue = null;
function updateDisplay(event) {
    display.textContent = "".concat(display.textContent, " ").concat(event.target.textContent);
}
function inputNumber(event) {
    var buttonValue = event.target.textContent;
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
