/*** func ***/

export const shuffleArray = (_arr) => {
	for (let i = _arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[_arr[i], _arr[j]] = [_arr[j], _arr[i]];
	}
	return _arr;
};
export const randomHex = () =>
	Math.floor(Math.random() * 16777215).toString(16);

export const randomInt = (min = 0, max = 1) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const randomRGBStr = (r = [0, 255], g = [0, 255], b = [0, 255]) => {
	let color = randomRGB(r, g, b);
	return `rgb(${color.r},${color.g},${color.b})`;
}

export const randomRGB = (r = [0, 255], g = [0, 255], b = [0, 255]) => {
	return {
		r: randomInt(r[0], r[1]),
		g: randomInt(g[0], g[1]),
		b: randomInt(b[0], b[1]),
	};
}

/*** \func ***/
