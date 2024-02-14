function sum(num1, num2) {
	return num1 + num2;
}

function calc(num1, num2, callback) {
	return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// Mostrar ejemplo con tiempo
setTimeout(function ()  {
	console.log('Hola mundo!!!!!!!');
}, 5000);

// Otro ejemplo setTime + callback
function grettin(name) {
	console.log(`Hola ${name}`);
}

setTimeout(grettin, 4000, 'Oscar');

// Otro Ejemplo 

function sum(num1, num2) {
	return num1 + num2;
}

function rest(num1, num2) {
	return num1 - num2;
}

function mult(num1, num2) {
	return num1 * num2;
}

function div(num1, num2) {
	return num1 / num2;
}

function calc(num1, num2, callback) {
	return callback(num1, num2);
};

console.log(calc(4, 5, rest));

