// main.js

// 1 - This is just a test
console.log("Hello from main.js");

// 2 - Store a reference to the target element
let targetElement = document.querySelector("h2");

// 3 - Log the reference to confirm it works
console.log(targetElement);

// 4 - Add a mouseover event listener
targetElement.addEventListener("mouseover", function () {
	console.log(this.innerText);
	this.innerText = "TIME";
	this.style = "cursor: wait"; // 7 - Update the cursor style
});

// 6 - Add a mouseout event listener
targetElement.addEventListener("mouseout", function () {
	this.innerText = "IKEA";
	this.style = "cursor: pointer";
});
