(function () {
	'use strict';
	var btn;
	var input;
	var resultInput;
	var result;

	function getValue() {
		var str = input.value;
		var number = "";
		result = 0;
		var operator = undefined;
		for (var i = 0; i < str.length; i++) {
			if (isNaN(str.charAt(i))) {
				operation(operator, number);
				operator = str.charAt(i);
				number = 0;
			} else {
				number += str.charAt(i).toString();
			}
		}
		operation(operator, number);
		return result;
	}

	function operation(operator, number) {
		switch (operator) {
			case '+':
				result += Number(number);
				break;
			case '-':
				result -= Number(number);
				break;
			case '*':
				result *= Number(number);
				break;
			case '/':
				result /= Number(number);
				break;
			default:
				result = Number(number);
		}
	}

	function oblicz() {
		resultInput.value = input.value + ' = ' + getValue().toString();
	}

	return (function () {
		btn = document.getElementById('btn');
		input = document.getElementById('value');
		resultInput = document.getElementById('result');
		btn.addEventListener('click', oblicz);
	}());
}());