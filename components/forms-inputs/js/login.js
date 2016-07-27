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
	


	var loginForm = document.getElementById("login");
	var email = loginForm.email;
	var password = loginForm.password;
	var term = loginForm.term;

	loginForm.addEventListener('submit', function (event) {
		
		// Check email
		if (validator.isEmailAddress(email.value)) {
			// alert("hi " + email.value);
			loginForm.className = "valid";
			console.log(email.value + "is valid");

		} else {
			email.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid email";
			console.log("Invalid email");
			loginForm.className = "invalid";
		}
		

		//Check the password: 6-8 long
		if (!(validator.isEmpty(password.value)) && (validator.isLength(password.value, 8)) && (validator.isOfLength(password.value, 6))) {
			loginForm.className = "valid";
			console.log(password.value  + "is valid");
		} else {
			password.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid password";
			loginForm.className = "invalid";
			console.log("Invalid password");
			console.log(password.value);

		}

		//Check the check box
		if (term.checked === false) {
			document.getElementById("errorBox").innerHTML = "Please agree with the term before you login";
			loginForm.className = "invalid";
			console.log(term.checked);
		} else {
			loginForm.className = "valid";
			console.log(term.checked);
		}

		event.preventDefault();
	});



});


