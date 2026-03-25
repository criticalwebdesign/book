// global
let viz = document.querySelector("main");

// generate
function generate() {
    let output = '';
    let count = randomInt(6, 12);
    let size = window.innerWidth * .10;

    for (let i = 0; i < count; i++) {

        // parameters
        let w = randomInt(size * .8, size * 1.2);
        let h = randomInt(size * .8, size * 1.2);

        // viewport center and offset
        let centerX = (window.innerWidth * .5);
        let centerY = (window.innerHeight * .5);
        let offsetX = (window.innerWidth * .25);
        let offsetY = (window.innerHeight * .25);

        // random x,y position using center and offset
        let x = randomInt(centerX - offsetX, centerX + offsetX);
        let y = randomInt(centerY - offsetY, centerY + offsetY);

        // style to apply to each shape
        let style = `
            position: absolute;
            transform: 
                translate(${x}px,${y}px)
                rotate(${randomInt(-1, 1)}deg);
            width: ${w - (w * .5)}px;
            height: ${h - (h * .5)}px;
            background-color:#${randomHex()};
        `;
                
        // 👉 change to output shapes for SVG
        output += `<div style="${style}"></div>`;
    }
    // display
    viz.innerHTML = output;
    // console.log(output);
}

// listeners
window.addEventListener("load", generate);
document.addEventListener("click", generate);

// helpers
function randomInt(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomHex() {
    let hex = "", chars = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        hex += chars[randomInt(0, chars.length - 1)];
    }
    return hex;
}
// 👉 add helper function
