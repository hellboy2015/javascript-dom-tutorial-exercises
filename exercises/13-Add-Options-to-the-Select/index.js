window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here
	let mySelect = document.querySelector("#mySelect");

	for (let i = 0; i < countries.length; i++) {
		let myOption = document.createElement("option");

		myOption.innerHTML = countries[i];
		mySelect.appendChild(myOption);
	}
	document.addEventListener("change", function() {
		var getText = mySelect.options[mySelect.selectedIndex].text;
		alert(getText);
	});
};
