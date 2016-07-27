window.addEventListener('load', function () {
	


	var creditForm = document.getElementById("credit");
	var fullName = creditForm.fullName;
	var cardNum = creditForm.cardNum;
	var csv = creditForm.csv;
	var month = creditForm.month;
	var year = creditForm.year; 
	var exDate; 

	creditForm.addEventListener('submit', function (event) {
		// Check fullName
		if (!(validator.isEmpty(fullName.value)) && (validator.isTrimmed(fullName.value)) && (validator.isOfLength(fullName.value, 2))) {
			// alert("hi " + firstName.value);
			fullName.className = "valid";
			console.log(fullName.value + "is valid");

		} else {
			fullName.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid fullName";
			creditForm.className = "invalid";
			console.log("Invalid fullName");
		}


		// Check cardNum
		if (validator.isCreditCard(cardNum.value)) {
			// alert("hi " + cardNum.value);
			creditForm.className = "valid";
			console.log(cardNum.value + "is valid");

		} else {
			cardNum.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid credit number";
			console.log("Invalid cardNum");
			creditForm.className = "invalid";
		}

		// Check the csv
		if (validator.isAlphanumeric(csv.value) && (csv.value.length === 3)) {
			creditForm.className = "valid";
			console.log(csv.value + "is valid");

		} else {
			csv.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid csv number";
			console.log("Invalid csv");
			creditForm.className = "invalid";
		}
		
		// Check the date of birth: minimum age is 10
		exDate = month.value + "-" + year.value;

		if ((validator.isAfterToday(exDate)) && (validator.isAfterDate(exDate, "01-01-2016")) && (!validator.isEmpty(exDate))) {
			creditForm.className = "valid";
			console.log(exDate + "is valid");
		} else {
			document.getElementById("errorBox").innerHTML = "Enter the valid exDate";
			creditForm.className = "invalid";
			console.log(exDate + "is not valid");

		}

		event.preventDefault();
	});



});