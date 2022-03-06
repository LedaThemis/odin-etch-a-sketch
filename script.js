function createGrids(n) {
  const gridContainer = document.querySelector("#grid-container");
  const gridSize = 960 / n;

  for (let i = 1; i <= n; i++) {
    let row = document.createElement("div");
    row.id = `row-${i}`;
    row.classList.add("grid-row");

    for (let j = 1; j <= n; j++) {
      let grid = document.createElement("div");

      grid.id = `grid-${j + i * 16 - 16}`;
      grid.classList.add("grid-block");
      grid.style.width = `${gridSize}px`;
      grid.style.height = `${gridSize}px`;
      grid.style.border = "1px solid grey";

      row.appendChild(grid);
    }

    gridContainer.appendChild(row);
  }
}

createGrids(16);
