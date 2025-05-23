// main.js

// create a variable to store updates to rotation
let rotation = 0;
// add a click listener to the whole document
document.addEventListener("click", function () {
    // variables to store random min/max values
    let min = 10;
    let max = 40;
    // update rotation
    rotation += Math.floor(Math.random() * (max - min + 1)) + min;
    // apply rotation
    document.body.style.transform = `rotate(${rotation}deg)`;
});