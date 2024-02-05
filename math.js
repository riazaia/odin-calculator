function add(a, b) {
	if (!isValidInput(a,b)) {
			return "error"
	}
	return a + b
}

function subtract(a, b) {
	if (!isValidInput(a,b)) {
			return "error"
	}
	return a - b
}

function multiply(a, b) {
	if (!isValidInput(a,b)) {
			return "error"
	}
	return a * b
}

function divide(a, b) {
	if (!isValidInput(a,b)) {
			return "error"
	}
	return a / b
}

function isValidInput(a,b) {
			if ((isNaN(a) || isNaN(b)) === true) {
			return false
	} else {
			return true
	}
}
