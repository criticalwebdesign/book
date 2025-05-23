// main.js

let text = [
    "World population with some sort of disability<sup>1</sup>",
    "Website images with missing alternative text<sup>2</sup>",
    "Adults in the United States who have a disability<sup>2</sup>",
    "Average detectable accessibility errors per web page<sup>1</sup>",
    "Disabled Americans with no high-speed internet, smartphone, or computer<sup>2</sup>",
    "Web pages with detectable WCAG 2 failures<sup>2</sup>", // webaim
];

let colors = [
    'rose', 'green', 'cyan', 'blue', 'purple', 'magenta'
]

// 👉 new code below...

// references to elements
let blurb = document.querySelector(".blurb");
let options = document.querySelectorAll(".option");
let userArr = populateArrayRandomIntUnique(0, 115);
// console.log(userArr);
let userCount = 36;

// loop through options
options.forEach(function (element, index) {
    // adds an event listener to each
    element.addEventListener("mouseover", () => {
        // console.log(index, element.textContent);
        setActive(index);
        displayUsers(userCount, index);
    });
});

// show the menu item is selected
function setActive(index) {
    //  populate blurb element using array index
    blurb.innerHTML = `<span class="${colors[index]}">${text[index]}</span>`;
    options.forEach(function (element, index) {
        element.classList.remove("active");
    });
    options[index].classList.add("active");
    // accessibility - unify mouse / keyboard focus
    options[index].focus();
    // accessibility
    userCount = updateUserCount();
}

// display all the portraits
function displayUsers(count, index) {
    // get percentage of option
    let percentage = options[index].dataset.percentage;
    // get affected number of users
    let affectedUsers = Math.round((count * percentage) / 100);
    // testing
    console.log(percentage, count, affectedUsers);

    // create var to store html output
    let str = "";
    // loop through the users and adds output
    for (let i = 0; i < count; i++) {
        // adds the user
        str += getUserPortraitString(i, affectedUsers);
    }
    // assign output to element
    document.querySelector(".users").innerHTML = str;

    // update number of columns/rows (considering viewport size)
    updateGridColumns(); // accessibility
}

