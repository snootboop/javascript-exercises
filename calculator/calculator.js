function add (no1, no2) {
	return no1 + no2;
}

function subtract (no1, no2) {
	return no1 - no2;
}

function sum (numArray) {
	return numArray.reduce((a, b) => a + b, 0);
}

function multiply (numArray) {
	return numArray.reduce((a, b) => a * b);
}

function power(no1, no2) {
	return Math.pow(no1, no2);
}

function factorial(num) {
	var result = num;
	if (num === 0 || num === 1) 
	  return 1; 
	while (num > 1) { 
	  num--;
	  result *= num;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}