// main.js

let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {

	// prevent default behavior of form
	event.preventDefault();

	// create variables for all items and convert type to numbers
	let q1 = Number(this.q1.value);
	let q2 = Number(this.q2.value);
	// complete these as part of the prompt
	let q3 = Number(this.q3.value);
	let q4 = Number(this.q4.value);
	let q5 = Number(this.q5.value);
	let q6 = Number(this.q6.value);
	let q7 = Number(this.q7.value);
	let q8 = Number(this.q8.value);
	let q9 = Number(this.q9.value);
	let q10 = Number(this.q10.value);

	// Add all converted responses
	let answer = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10);

	// log
	console.log(answer);

	// store in a new input
	this.answer.value = answer;
});
