/**
 *  Helper functions for Critical Web Design Book (2025)
 *  2023 Owen Mundy
 *  See license in repository
 */

/////////////////////////////////////////////
///////////////// RANDOM ////////////////////
/////////////////////////////////////////////

/**
 *  Round a number to n decimal places
 *  - Credit: https://stackoverflow.com/a/48764436/441878
 */
function round(num, decimalPlaces = 0) {
	var p = Math.pow(10, decimalPlaces);
	return Math.round(num * p) / p;
}
/**
 *  Return a random number between min (inclusive) and max (exclusive)
 *  Credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function randomNumber(min, max) {
	min = Number(min);
	max = Number(max);
	return Math.random() * (max - min) + min;
}
/**
 *  Return a random floating point value between min (inclusive) and max (inclusive)
 */
function randomFloat(min = 0, max = 1) {
	return Math.random() * (max - min + 1) + min;
}
/**
 *  Return a random integer between min (inclusive) and max (inclusive)
 *  Credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 *  Return a random rgb color
 */
function randomRGB(r = [0, 255], g = [0, 255], b = [0, 255]) {
	return {
		r: randomInt(r[0], r[1]),
		g: randomInt(g[0], g[1]),
		b: randomInt(b[0], b[1]),
	};
}
function randomRGBStr(r = [0, 255], g = [0, 255], b = [0, 255]) {
	let color = randomRGB(r, g, b);
	return `rgb(${color.r},${color.g},${color.b})`;
}
/**
 *  Return a random hex color
 */
function randomHexFromString() {
	let hex = "",
		chars = "0123456789abcdef";
	for (let i = 0; i < 6; i++) {
		hex += chars[randomInt(0, chars.length)];
	}
	return hex;
}
/**
 *  Return a random hex color using (256 * 256 * 256)
 *  https://gomakethings.com/a-better-way-to-generate-a-random-color-with-vanilla-js/
 */
function randomHex() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
/**
 *  Return a random index from the array
 */
function randomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
/**
 *  A variation of randomFromArray(), stored in Array.prototype
 */
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
};

/**
 *  Capitalize first letter of string. Credit: https://stackoverflow.com/a/1026087/441878
 */
function upperCaseFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 *  Zero-pad a string
 */
function zeroPad(str) {
	return ("0" + str).slice(-2);
}

/**
 *  Convert a date to a timezone
 */
function convertTZ(date, tzString) {
	return new Date(
		(typeof date === "string" ? new Date(date) : date).toLocaleString(
			"en-US",
			{ timeZone: tzString }
		)
	);
}

/**
 *  Populate an array with a value => [1,1,1]
 */
function populateArray(val, count) {
	var sizedArray = Array.apply(null, Array(count));
	return sizedArray.map(function (o) {
		return val;
	});
}

/**
 *  Populate an array with random numbers => [3,5,2]
 */
function populateArrayRandomInt(min, max, count) {
	var sizedArray = Array.apply(null, Array(count));
	return sizedArray.map(function (o) {
		return randomInt(min, max);
	});
}

/**
 *  Return an array of unique integers between min/max, of length
 */
function populateArrayRandomIntUnique(min, max, length) {
	if (!length) length = max;
	// create array with #s
	let arr = [];
	// create array with all the numbers
	for (let i = min; i < max; i++) {
		arr.push(i);
	}
	arr = shuffleArray(arr);
	// console.log(arr)
	return arr.splice(0, length);
}

/**
 *  Shuffle an array - credit https://stackoverflow.com/a/12646864/441878
 */
function shuffleArray(_arr) {
	for (let i = _arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[_arr[i], _arr[j]] = [_arr[j], _arr[i]];
	}
	return _arr;
}

/**
 *  Sort an array
 */
function sortArray(arr) {
	return arr.sort((a, b) => {
		return a - b;
	});
}

/////////////////////////////////////////////
///////////////// DRAWING ///////////////////
/////////////////////////////////////////////

/**
 *  Return random box points
 *  - defines random points between inner and outer box
 *  - bounds default to 100x100, uses w,h to scale
 *
 *  0,0 --------- 1,0
 *   |  1,1 - 1,8  |
 *   |  |       |  |
 *   |  8,1 - 8,8  |
 *  0,1 --------- 1,1
 */
function getRandomBox(w = 10, h = 10, count = 4) {
	let xAxis = [1, 2, 4, 7, 8, 8, 7, 4, 2, 1];
	let yAxis = [4, 7, 8, 8, 7, 4, 2, 1, 1, 2];
	let points = [];
	for (let i = 0; i < count; i++) {
		let x, y;
		let index = Math.floor(i / (count * 0.1));
		x = randomInt(w * xAxis[index], w * (xAxis[index] + 0.1));
		y = randomInt(h * yAxis[index], h * (yAxis[index] + 0.1));
		// console.log("getRandomBox()", index, x, y);
		points.push([x, y]);
	}
	return points;
}

/**
 *  Return random polygon points
 *  - defines random points around a circle
 *  - bounds default to 100x100, uses w,h to scale
 */
function getRandomPolygon(w = 10, h = 10, count = 4) {
	let angles = [];
	// create angles first so to sort
	for (let i = 0; i < count; i++) {
		var angle = 2 * Math.PI * (i / count) + randomFloat(-0.01, 0.01);
		angles.push(angle);
	}
	angles.sort();
	// console.log(JSON.stringify(angles));

	let r = ((w + h) / 2) * 5,
		cx = w * 5,
		cy = h * 5;

	let points = [];
	for (let i = 0; i < angles.length; i++) {
		let x = round(cx + r * Math.cos(angles[i]), 2);
		let y = round(cy + r * Math.sin(angles[i]), 2);
		console.log("getRandomPolygon()", x, y);
		points.push([x, y]);
	}
	// console.log(JSON.stringify(points));
	return points;
}

/**
 *  Return random polygon points (with offset)
 *  - defines random points around a circle
 *  - bounds default to 100x100, uses w,h to scale
 */
function getPolygonWithOffset(w, h, x, y, min, max) {
	// create points to define polygon [x1,y1 x2,y2 x3,y3 x4,y4]
	// select random point [x,y] within min/max, then offset from x,y
	let points = [
		`${x - randomInt(w * min, w * max)},${y - randomInt(h * min, h * max)}`,
		`${x + randomInt(w * min, w * max)},${y - randomInt(h * min, h * max)}`,
		`${x + randomInt(w * min, w * max)},${y + randomInt(h * min, h * max)}`,
		`${x - randomInt(w * min, w * max)},${y + randomInt(h * min, h * max)}`,
	];
	console.log("getPolygonWithOffset()", JSON.stringify(points));
	return points;
}

/////////////////////////////////////////////
/////////////// ENVIRONMENT /////////////////
/////////////////////////////////////////////

/**
 *  Get the hash from the current URL (minus the hash)
 */
function getUrlHash() {
	return Number(window.location.href.split("#")[1]) || null;
}
/**
 *  Set a value as the hash in the current URL
 */
function setUrlHash(str) {
	// replace hash in url
	window.location.hash = "#" + str;
}

/**
 *  Return current Bootstrap breakpoint size - credit https://stackoverflow.com/a/55368012/441878
 */
function getViewportSize() {
	const width = Math.max(
		document.documentElement.clientWidth,
		window.innerWidth || 0
	);
	if (width <= 575.98) return "xs";
	if (width <= 767.98) return "sm";
	if (width <= 991.98) return "md";
	if (width <= 1199.98) return "lg";
	if (width <= 1399.98) return "xl";
	return "xxl";
}

/**
 * Preload images
 */
function preloadImage(url) {
	var img = new Image();
	img.src = url;
}
// usage
// for (let i = 0; i < 116; i++) {
// 	preloadImage(`assets/img/users-200w/${i}.jpg`);
// }
