createGrids(16); // initial grid

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", handleClearButtonClick);

function startSketch(n) {
  createGrids(n);

  const grid = document.querySelectorAll(".grid-block");
  grid.forEach((block) => block.addEventListener("mouseover", onHover));
}

function createGrids(n) {
  const gridContainer = document.querySelector("#grid-container");
  gridContainer.replaceChildren();
  const gridSize = 960 / n;

  for (let i = 1; i <= n; i++) {
    let row = document.createElement("div");
    row.id = `row-${i}`;
    row.classList.add("grid-row");

    for (let j = 1; j <= n; j++) {
      let block = document.createElement("div");

      block.id = `grid-${j + i * 16 - 16}`;
      block.classList.add("grid-block");
      block.style.width = `${gridSize}px`;
      block.style.height = `${gridSize}px`;
      block.style.border = "1px solid grey";

      row.appendChild(block);
    }

    gridContainer.appendChild(row);
  }
}

function onHover(e) {
  e.target.style.backgroundColor = "black";
}

function handleClearButtonClick(e) {
  let selectedSize;
  do {
    selectedSize = prompt("Input Desired Grid Size: (Max Size: 100)");
  } while (
    parseInt(selectedSize) > 100 ||
    selectedSize === null ||
    selectedSize === ""
  );
  console.log(selectedSize);
  createGrids(parseInt(selectedSize));
}
