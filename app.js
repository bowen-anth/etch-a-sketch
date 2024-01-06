const BODY = document.querySelector("body");
const MAIN_DIV = document.createElement("div");
const gridItems = document.querySelectorAll(".grid-item");

MAIN_DIV.classList.add("main");
BODY.appendChild(MAIN_DIV);

newGridButton.addEventListener("click", () => {
  let gridSize = prompt("Enter the number of squares per side (max: 100):");

  // Validate user input
  gridSize = parseInt(gridSize);
  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  // Calculate the width of each square based on the total width of the grid
  const squareWidth = MAIN_DIV.offsetWidth / gridSize - 1;
  gridItems.style.setProperty("--square-width", `${squareWidth}px`);

  createGrid(gridSize);
});

function createGrid(size) {
  MAIN_DIV.innerHTML = ""; // Clear existing grid

  for (let i = 1; i <= size * size; i++) {
    const newDivs = document.createElement("div");
    newDivs.classList.add("grid-item");
    newDivs.style.backgroundColor = "black";
    MAIN_DIV.appendChild(newDivs);
  }
}

const appendDiv = () => {
  for (let i = 1; i <= 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    MAIN_DIV.appendChild(newDiv);
  }
};

MAIN_DIV.addEventListener("click", (event) => {
  if (event.target.classList.contains("grid-item")) {
    event.target.classList.toggle("colored");
    console.log(event.target);
  }
});

createGrid(40);
