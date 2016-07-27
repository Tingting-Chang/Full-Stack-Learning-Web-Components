/*************************************************
the Signup Form’s validation would check each input listed below:1

1. The user’s first name
	Validation: Check that the user’s input is not empty and that it is at least a length of two characters.
2. The user’s last name
	Validation: Check that the user’s input is not empty and that it is at least a length of two characters.
3. The user’s email address
	Validation: Check that the user’s input is not empty and that it is a valid email address.
4. The user’s date of birth
	Validation: Check that the user’s birthday is before today and computes to a minimum age.
5. The user’s password
	Validation: Check that it is not empty and that it is at least six to eight characters long.
***************************************************/

window.addEventListener('load', function () {
	


	var signupForm = document.getElementById("signup");
	var firstName = signupForm.firstName;
	var lastName = signupForm.lastName;
	var email = signupForm.email;
	var password = signupForm.password;
	var days = signupForm.days;
	var months = signupForm.months;
	var years = signupForm.years;  
	var birthday;

	signupForm.addEventListener('submit', function (event) {
		// Check firstName
		if (!(validator.isEmpty(firstName.value)) && (validator.isTrimmed(firstName.value)) && (validator.isOfLength(firstName.value, 2))) {
			// alert("hi " + firstName.value);
			signupForm.className = "valid";
			console.log(firstName.value + "is valid");

		} else {
			firstName.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid first name";
			signupForm.className = "invalid";
			console.log("Invalid firstName");
		}

		// Check lastName
		if (!(validator.isEmpty(lastName.value)) && (validator.isTrimmed(lastName.value)) && (validator.isOfLength(lastName.value, 2))) {
			signupForm.className = "valid";
			console.log(lastName.value + "is valid");

		} else {
			lastName.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid last name";
			signupForm.className = "invalid";
			console.log("Invalid lastName");
		}

		// Check email
		if (validator.isEmailAddress(email.value)) {
			// alert("hi " + email.value);
			signupForm.className = "valid";
			console.log(email.value + "is valid");

		} else {
			email.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid email";
			console.log("Invalid email");
			signupForm.className = "invalid";
		}
		
		// Check the date of birth: minimum age is 10
		birthday = days.value + "-" + months.value + "-" + years.value;

		if ((validator.isBeforeToday(birthday)) && (validator.isBeforeDate(birthday, "01-01-2005")) && (!validator.isEmpty(birthday))) {
			signupForm.className = "valid";
			console.log(birthday + "is valid");
		} else {
			birthday.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid birthday";
			signupForm.className = "invalid";
			console.log(birthday);

		}

		//Check the password: 6-8 long
		if (!(validator.isEmpty(password.value)) && (validator.isLength(password.value, 8)) && (validator.isOfLength(password.value, 6))) {
			signupForm.className = "valid";
			console.log(password.value  + "is valid");
		} else {
			password.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid password";
			signupForm.className = "invalid";
			console.log("Invalid password");
			console.log(password.value);

		}

		event.preventDefault();
	});



});


