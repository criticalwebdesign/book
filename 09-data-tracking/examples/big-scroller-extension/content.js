/**
 * Title: Big Scroller
 * Title: Long Distance Scroller
 * Title: Scroller Olympics
 * Author: Owen Mundy
 * Date: 2023
 * License: MIT
 */

console.log("🕹️ Hello, Big Scroller!");

// cross-platform (browser = firefox)
if (typeof browser === "undefined") {
	var browser = chrome;
}

(async () => {
	// scroll distance for this page
	let scrollDistance = 0;
	// default object to save in background
	let scrollStats = {
		// highest distance user has ever scrolled on one page
		onePage: 0,
		// total distance user has scrolled, ever
		total: 0,
		totalK: 0,
		totalM: 0,
	};
	// override
    let saved = await getData();
    if (saved) scrollStats = saved;
	// console.log(scrollStats);

    // for every gesture on track pad or scroll wheel
	window.addEventListener("scroll", (event) => {
		// console.log("scroll detected");

		// increase scroll distance by 1 wheel click
		// ~ 1 wheel click = 1 mm
		// ~ 1,000,000 wheel clicks = 1 km
		scrollDistance++;
		scrollStats.total++;

		// // turn off to save performance
		// console.log(
		// 	// window.scrollY, // distance in pixels from top, not cumulative
		// 	scrollDistance,
		// 	scrollStats.onePage,
		// 	scrollStats.total
		// );
	});

	// user has finished their gesture
	document.addEventListener("scrollend", (event) => {
		console.log("scrollend event fired!");

		// check if user recorded higher distance per page
		if (scrollDistance > scrollStats.onePage) {
			scrollStats.onePage = scrollDistance;
			console.log("A new record has been set!");
		}
		scrollStats.totalK = scrollDistance / 1000000;
		scrollStats.totalM = scrollStats.totalK * 0.621371;

		// user finished scrolling so now safe (better for performance) to save
		saveData(scrollStats);
	});
})();


function saveData(data) {
	browser.storage.local.set({ scrollStats: data }).then(() => {
		// console.log("SET", data);
	}, onError);
}

async function getData() {
	return browser.storage.local.get(["scrollStats"]).then((result) => {
		// console.log("GET", result.scrollStats);
		return result.scrollStats;
	}, onError);
}

function onError(error) {
	console.error(error);
}