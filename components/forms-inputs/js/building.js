window.addEventListener('load', function () {
	


	var buildingForm = document.getElementById("building");
	var red = buildingForm.red;
	var green = buildingForm.green;
	var blue = buildingForm.blue;
	var alpha = buildingForm.alpha;
	var rgb, rgba;
	var color = buildingForm.color_area;
	

	buildingForm.addEventListener('submit', function (event) {
		

		//Check red, green, blue
		rgb = "rgb(" + red.value + "," + green.value + "," + blue.value + ")"; 
		rgba = "rgba(" + red.value + "," + green.value + "," + blue.value + "," + alpha.value + ")";

		console.log(rgb);
		console.log(rgba);

		if (!(validator.isEmpty(red.value)) && !(validator.isEmpty(green.value)) && !(validator.isEmpty(blue.value)) && !(validator.isEmpty(alpha.value)) && (validator.isRGB(rgb))) {
			buildingForm.className = "valid";
			rgba = "rgba(" + red.value + "," + green.value + "," + blue.value + "," + alpha.value + ")";
			console.log(rgba + "is valid rgb color");
			color.style.backgroundColor = rgb;
		} else {
			document.getElementById("errorBox").innerHTML = "Enter the valid rgb value range from 0 to 250";
			buildingForm.className = "invalid";
			console.log("Invalid rgb color value");
		}

		event.preventDefault();
	});



});