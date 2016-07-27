window.addEventListener('load', function () {
	


	var questionnaireForm = document.getElementById("questionnaire");
	var radio = questionnaireForm.radio_button;
	var count = 0;
	var other = questionnaireForm.other_ice;

	questionnaireForm.addEventListener('submit', function (event) {
		for (var i = 0; i < radio.length; i++) {
			if (radio[i].checked == false) {
				count++;
			}
		}

		if (count === 6) {
			document.getElementById("errorBox").innerHTML = "You have to at least chose one option";
			console.log("Invalid choice");
			questionnaireForm.className = "invalid";
		} else {
			if (radio[5].checked === true) {
				if (!(validator.isEmpty(other.value)) && (validator.isTrimmed(other.value)) && (validator.isOfLength(other.value, 2))) {
					questionnaireForm.className = "valid";
					console.log(other.value + " is valid");
				} else {
					other.focus();
					document.getElementById("errorBox").innerHTML = "Please input your option before submit";
					questionnaireForm.className = "invalid";
					console.log("Invalid choice");
				}
			} else {
				console.log("You picked " + radio.value);
			}
		}


		event.preventDefault();
	});



});