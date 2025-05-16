let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {

    // prevent default behavior of form
	event.preventDefault();

    // create variables for all items and convert type to numbers
	let q1 = Number(this.q1.value);
	let q2 = Number(this.q2.value);
	
	// Add all converted responses
	let answer = (q1 + q2);

	// log
	console.log(answer);

	// store in a new input
	this.answer.value = answer;
});
