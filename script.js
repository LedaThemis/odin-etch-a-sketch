function createGrids(n) {
  const gridContainer = document.querySelector("#grid-container");
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

createGrids(100);

const grid = document.querySelectorAll(".grid-block");

grid.forEach((block) => block.addEventListener("mouseover", onHover));

function onHover(e) {
  e.target.style.backgroundColor = "black";
}
