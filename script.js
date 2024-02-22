let color = "blue";
let click = true;

function GiveSizeForGrid(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("div");
        square.addEventListener("mouseover", Draw); // Add event listener
        board.appendChild(square);
    }
}

GiveSizeForGrid(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector(".error").style.display = "none";
        populateBoard(input);
    } else {
        document.querySelector(".error").style.display = "flex";
    }
}

function Draw() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}
