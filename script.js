// script.js

let color = "black";
let click = false;

function GiveSizeForGrid(size) {
    let board = document.querySelector(".board");
    board.innerHTML = ''; // Clear existing content

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("div");
        square.addEventListener("mouseover", Draw);
        board.appendChild(square);
    }
}

GiveSizeForGrid(16);

function Draw() {
    if (click) {
        if (color === "random") {
            let randomRed = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);
            this.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(newColor) {
    if (newColor === "picker") {
        color = document.getElementById("colorpicker").value;
    } else {
        color = newColor;
    }
    click = true;
}

document.getElementById("colorpicker").addEventListener("input", function () {
    changeColor("picker");
});

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll(".div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}

// Toggle click variable based on mouse events
document.addEventListener("mousedown", function () {
    click = true;
});

document.addEventListener("mouseup", function () {
    click = false;
});
