// global
let viz = document.querySelector("svg");
let countEle = document.querySelector("#count");
countEle.addEventListener("input", generate);
let scaleEle = document.querySelector("#scale");
scaleEle.addEventListener("input", generate);
let positionEle = document.querySelector("#position");
positionEle.addEventListener("input", generate);

// https://coolors.co/ff7b00-ff8800-ff9500-ffa200-ffaa00-ffb700-ffc300-ffd000-ffdd00-ffea00
let colors = ["f72585", "b5179e", "7209b7", "560bad", "480ca8", "3a0ca3", "3f37c9", "4361ee", "4895ef", "4cc9f0"];

// https://coolors.co/ff7b00-ff8800-ff9500-ffa200-ffaa00-ffb700-ffc300-ffd000-ffdd00-ffea00
// colors = ["ff7b00", "ff8800", "ff9500", "ffa200", "ffaa00", "ffb700", "ffc300", "ffd000", "ffdd00", "ffea00"];

// https://coolors.co/palette/562c2c-f2542d-f5dfbb-0e9594-127475
colors = ["562c2c", "f2542d", "f5dfbb", "0e9594", "127475"];

// https://coolors.co/palette/bce784-5dd39e-348aa7-525174-513b56
colors = ["bce784", "5dd39e", "348aa7", "525174", "513b56"]




// generate
function generate() {
    let output = '';
    // let count = randomInt(6, 12);
    let count = countEle.value || randomInt(6, 12);
    let size = window.innerWidth * .10;

    for (let i = 0; i < count; i++) {

        // parameters
        let w = randomInt(size * .8, size * 1.2) * scaleEle.valueAsNumber;
        let h = randomInt(size * .8, size * 1.2) * scaleEle.valueAsNumber;

        // viewport center and offset
        let centerX = (window.innerWidth * .5);
        let centerY = (window.innerHeight * .5);
        let offsetX = positionEle.valueAsNumber;
        let offsetY = positionEle.valueAsNumber;

        // random x,y position using center and offset
        let x = randomInt(
            centerX - offsetX,
            centerX + offsetX
        );
        let y = randomInt(
            centerY - offsetY,
            centerY + offsetY
        );

        // alternative shapes...

        // CIRCLE
        // output += `<circle r="${randomInt(5, 30)}" fill="#${randomHex()}" cx="${x}" cy="${y}"></circle> `;

        // POLYGON
        // create points to define polygon [x1,y1 x2,y2 x3,y3 x4,y4] 


        // min/max scale
        let min = .75;
        let max = .9;
        // let points = `0,0 100,0 100,100 0,100`;
        let points = `
                    ${-randomInt(w * min, w * max)},${-randomInt(h * min, h * max)} 
                    ${randomInt(w * min, w * max)},${-randomInt(h * min, h * max)} 
                    ${randomInt(w * min, w * max)},${randomInt(h * min, h * max)} 
                    ${-randomInt(w * min, w * max)},${randomInt(h * min, h * max)} 
                    `;

        // output += `<polygon stroke="none" points="${points}" 
        //     transform ="translate(${x},${y}) rotate(${randomInt(-1, 1)})"
        //     fill="#${randomHex()}" />`;

        // 👉 change to output shapes for SVG
        output += `<polygon stroke="none" points="${points}" 
                    transform ="translate(${x},${y}) rotate(${randomInt(-1, 1)})" 
                    fill="#${randomFromArray(colors)}" />`;
    }
    // display
    viz.innerHTML = output;
    // console.log(output)
}

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
// 👉 helper function to get random element from array
function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


// listeners
window.addEventListener("load", generate);
viz.addEventListener("click", generate);