// Adds accessibility features to accessibility-data example

let selectedOption = 0,
	viewportSize,
	rowCounts = { xs: 3, sm: 3, md: 3, lg: 3, xl: 4, xxl: 4 },
	viewportUserCounts = { xs: 9, sm: 12, md: 18, lg: 18, xl: 32, xxl: 36 };

function updateUserCount() {
	// update viewport size
	viewportSize = getViewportSize();
	// update number of persons in display
	return viewportUserCounts[viewportSize];
}

function updateGridColumns() {
	// change the number of columns in the grid based on viewport size
	document.querySelector(
		".users"
	).style.gridTemplateRows = `repeat(${rowCounts[viewportSize]},minmax(5rem, 1fr))`;
}

// every time viewport is resized
window.addEventListener(
	"resize",
	function (event) {
		// console.log("resize event");

		try {
			if (!userCount) return;

			// save previous user count
			let previousUserCount = userCount;
			let previousViewportSize = viewportSize;

			// get the current selected option
			for (let i = 0; i < options.length; i++) {
				if (options[i].classList.contains("active")) {
					// console.log(options[i], i);
					selectedOption = i;
					break;
				}
			}

			// update # of users to show
			userCount = updateUserCount();
			// console.log(viewportSize, userCount, previousUserCount);

			// has the number of users changed?
			if (
				userCount != previousUserCount ||
				viewportSize != previousViewportSize
			) {
				// update layout
				displayUsers(userCount, selectedOption);
			}
		} catch (err) {
			// console.error(err);
		}
	},
	true
);
