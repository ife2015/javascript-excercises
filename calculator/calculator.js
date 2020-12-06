function add (num1, num2) {
	let addition = num1 + num2; 
	return addition; 
}

function subtract (num1, num2) {
	let subtraction = num1 - num2; 
	return subtraction; 
} 

function sum (array) {
	const summation = array.reduce(function(total, current){
		return total + current;
	},0);

	return summation;
}

function multiply (array) {
	let initial = 1; 
		for(var i=0; i<array.length; i++){
			initial *= array[i];
		}
	return initial;
}

function power(num1,num2) {
	let result = 1; 
		for( var i=0; i<num2; i++){
			result *= num1;
		}
	return result;
}

function factorial(num) {
	let result = 1;
		for(i=num; i>=1 && i<=num; i--){
			result *= i; 
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