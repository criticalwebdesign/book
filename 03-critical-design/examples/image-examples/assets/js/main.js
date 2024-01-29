/**
 *  Title: Image Swap Event Listeners Example
 *  Author: Owen Mundy
 *  Date: 2023
 *  License: MIT
 */

// 1 - Image swap happens with CSS

// 2 - Change the background image style property
let ele2 = document.querySelector("#ele2");
ele2.addEventListener("mouseover", function () {
	this.style.backgroundImage = "url(assets/img/cat-02.jpg)";
});
ele2.addEventListener("mouseout", function () {
	this.style.backgroundImage = "url(assets/img/cat-01.jpg)";
});

// 3 - Change the image src value to a new image
let ele3 = document.querySelector("#ele3");
ele3.addEventListener("mouseover", function () {
	this.src = "assets/img/cat-02.jpg";
});
ele3.addEventListener("mouseout", function () {
	this.src = "assets/img/cat-01.jpg";
});

// 4 - Change the background image style property on "mousedown"|"mouseup"
let ele4 = document.querySelector("#ele4");
ele4.addEventListener("mousedown", function () {
	this.style.backgroundImage = "url(assets/img/cat-02.jpg)";
});
// this example adds a listener with a separate handler function
ele4.addEventListener("mouseup", mouseUpHandler);
function mouseUpHandler() {
	this.style.backgroundImage = "url(assets/img/cat-01.jpg)";
}

// 5 - Change the image src value on "click"
let ele5 = document.querySelector("#ele5");
ele5.addEventListener("click", function () {
	if (this.src.includes("cat-01")) {
		this.src = "assets/img/cat-02.jpg";
	} else {
		this.src = "assets/img/cat-01.jpg";
	}
});

// 6 - Change the image src value on "click"
document.getElementById("ele6").addEventListener("click", function () {
	if (this.src.includes("cat-01")) {
		this.src = "assets/img/cat-02.jpg";
	} else {
		this.src = "assets/img/cat-01.jpg";
	}
});
