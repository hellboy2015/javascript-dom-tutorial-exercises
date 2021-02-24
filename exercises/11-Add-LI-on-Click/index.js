let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let myLi = document.createElement("li");
	let myUl = document.querySelector("#myList");

	myLi.innerHTML = "Fourth element";
	myUl.appendChild(myLi);
});
