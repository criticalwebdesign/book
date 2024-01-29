let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {

    // prevent default behavior of form
	event.preventDefault();

    // create variables for all items
	let q1 = this.q1.value;
	let q2 = this.q2.value;
	let q3 = this.q3.value;
	let q4 = this.q4.value;
	let q5 = this.q5.value;
	let q6 = this.q6.value;
	let q7 = this.q7.value;
	let q8 = this.q8.value;
	let q9 = this.q9.value;
	let q10 = this.q10.value;

	// For odd items: subtract one from the user response.
	q1 -= 1;
	q3 -= 1;
	q5 -= 1;
	q7 -= 1;
	q9 -= 1;

	// For even-numbered items: subtract the user responses from 5
	q2 = 5 - q2;
	q4 = 5 - q4;
	q6 = 5 - q6;
	q8 = 5 - q8;
	q10 = 5 - q10;

	// Add all converted responses; multiply that total by 2.5.
	let answer = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10) * 2.5;

	// store in a new input
	this.answer.value = answer;
});
