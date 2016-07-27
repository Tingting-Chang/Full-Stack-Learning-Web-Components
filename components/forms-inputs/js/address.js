window.addEventListener('load', function () {
	
	var addressForm = document.getElementById("address");
	var firstName1 = addressForm.firstName1;
	var lastName1 = addressForm.lastName1;
	var firstName2 = addressForm.firstName2;
	var lastName2 = addressForm.lastName2;
	var address1 = addressForm.address1;
	var address2 = addressForm.address2;
	var city1 = addressForm.city1;
	var city2 = addressForm.city2;
	var country1 = addressForm.country1;  
	var country2 = addressForm.country2;
	var term = addressForm.term;  

	addressForm.addEventListener('submit', function (event) {

		// Check firstName for shipping information
		if (!(validator.isEmpty(firstName1.value)) && (validator.isTrimmed(firstName1.value)) && (validator.isOfLength(firstName1.value, 2))) {
			// alert("hi " + firstName.value);
			addressForm.className = "valid";
			console.log(firstName1.value + "is valid");

		} else {
			firstName1.focus();
			document.getElementById("errorBox1").innerHTML = "Enter the valid first name for shipping information";
			addressForm.className = "invalid";
			console.log("Invalid firstName for shipping information");
		}

		// Check firstName for billing information
		if (!(validator.isEmpty(firstName2.value)) && (validator.isTrimmed(firstName2.value)) && (validator.isOfLength(firstName2.value, 2))) {
			// alert("hi " + firstName.value);
			addressForm.className = "valid";
			console.log(firstName2.value + "is valid for billing information");

		} else {
			firstName2.focus();
			document.getElementById("errorBox2").innerHTML = "Enter the valid first name for billing information";
			addressForm.className = "invalid";
			console.log("Invalid firstName for billing information");
		}

		// Check lastName for shipping information
		if (!(validator.isEmpty(lastName1.value)) && (validator.isTrimmed(lastName1.value)) && (validator.isOfLength(lastName1.value, 2))) {
			addressForm.className = "valid";
			console.log(lastName1.value + "is valid for shipping information");

		} else {
			lastName1.focus();
			document.getElementById("errorBox1").innerHTML = "Enter the valid last name for shipping information";
			addressForm.className = "invalid";
			console.log("Invalid lastName for shipping information");
		}

		// Check lastName for billing information
		if (!(validator.isEmpty(lastName2.value)) && (validator.isTrimmed(lastName2.value)) && (validator.isOfLength(lastName2.value, 2))) {
			addressForm.className = "valid";
			console.log(lastName2.value + "is valid for billing information");

		} else {
			lastName2.focus();
			document.getElementById("errorBox2").innerHTML = "Enter the valid last name";
			addressForm.className = "invalid";
			console.log("Invalid lastName for billing information");
		}

		// Check adress for shipping information: at least 2 characters
		if (!(validator.isEmpty(address1.value)) && (validator.isTrimmed(address1.value)) && (validator.isOfLength(address1.value, 2)) && (validator.isAlphanumeric(address1.value))) {
			// alert("hi " + email.value);
			addressForm.className = "valid";
			console.log(address1.value + "is valid for shipping information");

		} else {
			address1.focus();
			document.getElementById("errorBox1").innerHTML = "Enter the valid adress for shipping information";
			console.log("Invalid adress for shipping information");
			addressForm.className = "invalid";
		}

		// Check adress for billing information: at least 2 characters
		if (!(validator.isEmpty(address2.value)) && (validator.isTrimmed(address2.value)) && (validator.isOfLength(address2.value, 2)) && (validator.isAlphanumeric(address2.value))) {
			// alert("hi " + email.value);
			addressForm.className = "valid";
			console.log(address2.value + "is valid for billing information");

		} else {
			address2.focus();
			document.getElementById("errorBox2").innerHTML = "Enter the valid adress for billing information";
			console.log("Invalid adress for billing information");
			addressForm.className = "invalid";
		}
		
		// Check city for shipping information: at least 2 characters
		if (!(validator.isEmpty(city2.value)) && (validator.isTrimmed(city2.value)) && (validator.isOfLength(city2.value, 2)) && (validator.isAlphanumeric(city2.value))) {
			// alert("hi " + email.value);
			addressForm.className = "valid";
			console.log(city2.value + "is valid for shipping information");

		} else {
			city2.focus();
			document.getElementById("errorBox1").innerHTML = "Enter the valid city name for shipping information";
			console.log("Invalid city name for shipping information");
			addressForm.className = "invalid";
		}

		// Check city for billing information: at least 2 characters
		if (!(validator.isEmpty(city1.value)) && (validator.isTrimmed(city1.value)) && (validator.isOfLength(city1.value, 2)) && (validator.isAlphanumeric(city1.value))) {
			// alert("hi " + email.value);
			addressForm.className = "valid";
			console.log(city1.value + "is valid for billing information");

		} else {
			city1.focus();
			document.getElementById("errorBox2").innerHTML = "Enter the valid city name for billing information";
			console.log("Invalid city name for billing information");
			addressForm.className = "invalid";
		}

		// Check country for shipping information: at least 2 characters
		if (!(validator.isEmpty(country1.value)) && (validator.isTrimmed(country1.value)) && (validator.isOfLength(country1.value, 2)) && (validator.isAlphanumeric(country1.value))) {
			// alert("hi " + email.value);
			addressForm.className = "valid";
			console.log(country1.value + "is valid for shipping information");

		} else {
			country1.focus();
			document.getElementById("errorBox1").innerHTML = "Enter the valid country name for shipping information";
			console.log("Invalid country name for shipping information");
			addressForm.className = "invalid";
		}

		// Check country for billing information: at least 2 characters
		if (!(validator.isEmpty(country2.value)) && (validator.isTrimmed(country2.value)) && (validator.isOfLength(country2.value, 2)) && (validator.isAlphanumeric(country2.value))) {
			// alert("hi " + email.value);
			addressForm.className = "valid";
			console.log(country2.value + "is valid for billing information");

		} else {
			country2.focus();
			document.getElementById("errorBox2").innerHTML = "Enter the valid country name for billing information";
			console.log("Invalid country name for billing information");
			addressForm.className = "invalid";
		}

		//Check whether shipping address match the billing address
		if (term.checked === true) {
			if ((firstName1.value === firstName2.value) && (lastName1.value === lastName2.value) && (address1.value === address2.value) && (city1.value === city2.value) && (country1.value === country2.value)) {
				addressForm.className = "valid";
				console.log(term.checked);
			} else {
				document.getElementById("errorBox1").innerHTML = "Your shipping address does not match your billing information ";
				addressForm.className = "invalid";
				console.log(term.checked);
			}
		}
		



		event.preventDefault();
	});



});
