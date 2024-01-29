/*** func ***/

export const shuffleArray = (_arr) => {
	for (let i = _arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[_arr[i], _arr[j]] = [_arr[j], _arr[i]];
	}
	return _arr;
};
export const randomHex = () =>
	"#" + Math.floor(Math.random() * 16777215).toString(16);

export const randomInt = (min = 0, max = 1) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

/*** \func ***/
