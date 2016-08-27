window.addEventListener('load', function (event) {
	var calcForm = document.getElementById('calculator');
	var	buttons = document.querySelectorAll('.button input'),	
		result = calcForm.screen,
		clear = calcForm.clear,
		del = calcForm.delete;

	//If buttons is not "=" then we go to addValue(i) functioin
	//otherwise, we go to calculate(i) function to get the result

	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].value === "=") {
			buttons[i].addEventListener('click', calculate(i));
		} else if ((buttons[i].value !== "CLEAR") && (buttons[i].value !== "DEL") && (buttons[i].value !== "+/-")){
			buttons[i].addEventListener('click', addValue(i));
		}
				console.log(result.value);

	}

	function addValue(i) {
		return function () {
			result.value += buttons[i].value;	
		};
	}

	function calculate(i) {
		return function () {
			result.value = eval(result.value);	
		};
	}

	clear.onclick = function () {
		result.value = '';
	};

	del.onclick = function () {
		result.value = result.value.slice(0, result.value.length - 1);
	};

	event.preventDefault();
});