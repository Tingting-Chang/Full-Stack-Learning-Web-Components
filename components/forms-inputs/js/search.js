window.addEventListener('load', function () {
	


	var searchForm = document.getElementById("search_form");
	var search = searchForm.search;
	
	searchForm.addEventListener('submit', function (event) {
		
		// Check search item
		if ((validator.isAlphanumeric(search.value)) && !(validator.isEmpty(search.value)) && (validator.isTrimmed(search.value)) && (validator.isOfLength(search.value, 2))) {
			// alert("hi " + search.value);
			searchForm.className = "valid";
			console.log(search.value + "is valid");

		} else {
			search.focus();
			document.getElementById("errorBox").innerHTML = "Enter the valid queary to search";
			console.log("Invalid search");
			searchForm.className = "invalid";
		}

		event.preventDefault();
	});



});