// Your code here
var myUl = document.querySelector("ul");
var myToDo = document.querySelector("#addToDo");

myToDo.addEventListener("change", function() {
	var myLi = document.createElement("li");
	myLi.innerHTML = '<span><i class="fa fa-trash"></i></span>' + " " + myToDo.value;
	myUl.appendChild(myLi);
	addClickListener();
});

function addClickListener() {
	var allTasks = document.querySelectorAll(".fa-trash");
	for (let i = 0; i < allTasks.length; i++) {
		allTasks[i].addEventListener("click", function() {
			myUl.removeChild(this.closest("li"));
		});
	}
}
addClickListener();
