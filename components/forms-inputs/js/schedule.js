window.addEventListener('load', function () {
	


	var scheduleForm = document.getElementById("schedule");
	var date = scheduleForm.date;
	var time = scheduleForm.time;
	var timezone = scheduleForm.DropDownTimezone;
	var message = scheduleForm.message;
	var phone = scheduleForm.phone;
	var email = scheduleForm.email;

	scheduleForm.addEventListener('submit', function (event) {
		// Check date

		if ((validator.isDate(date.value)) && (validator.isAfterDate(date.value, "01-01-2005")) && (!validator.isEmpty(date.value))) {
			scheduleForm.className = "valid";
			console.log(date.value + " is valid");
		} else {
			document.getElementById("errorBox").innerHTML = "Enter the valid date";
			scheduleForm.className = "invalid";
			console.log(date.value + " is invalid");
		}

		// Check time
		if (!(validator.isEmpty(time.value))) {
			scheduleForm.className = "valid";
			console.log(time.value + "is valid");

		} else {
			document.getElementById("errorBox").innerHTML = "Enter the valid time";
			scheduleForm.className = "invalid";
			console.log(time.value + " is invalid time");
		}

		// Check timezone
		if (!(validator.isEmpty(timezone.value))) {
			scheduleForm.className = "valid";
			console.log(timezone.value + "is valid");

		} else {
			document.getElementById("errorBox").innerHTML = "Enter the valid timezone";
			scheduleForm.className = "invalid";
			console.log(timezone.value + "is invalid timezone");
		}

		// Check message
		if (!(validator.isEmpty(message.value)) && (validator.isTrimmed(message.value)) && (validator.isOfLength(message.value, 2))) {
			scheduleForm.className = "valid";
			console.log(message.value + "is valid");

		} else {
			message.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid message";
			scheduleForm.className = "invalid";
			console.log("Invalid message" + message);
		}


		//Check the phone number 10
		if (!(validator.isEmpty(phone.value)) && (validator.isOfLength(phone.value, 10)) && (validator.isAlphanumeric(phone.value))) {
			scheduleForm.className = "valid";
			console.log(phone.value  + "is valid");
		} else {
			phone.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid 10 digit phone number";
			scheduleForm.className = "invalid";
			console.log("Invalid phone");
			console.log(phone.value);

		}

		// Check email
		if (validator.isEmailAddress(email.value)) {
			scheduleForm.className = "valid";
			console.log(email.value + "is valid");

		} else {
			email.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid email";
			console.log("Invalid email");
			scheduleForm.className = "invalid";
		}


		event.preventDefault();
	});



});
