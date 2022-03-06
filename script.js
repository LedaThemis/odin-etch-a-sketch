function createGrids(n) {
  const gridContainer = document.querySelector("#grid-container");
  for (let i = 1; i <= n; i++) {
    let row = document.createElement("div");
    row.id = `row-${i}`;
    row.classList.add("grid-row");

    for (let j = 1; j <= n; j++) {
      let grid = document.createElement("div");

      grid.id = `grid-${j + i * 16 - 16}`;
      grid.classList.add("grid-block");
      grid.style.width = "16px";
      grid.style.height = "16px";

      row.appendChild(grid);
    }

    gridContainer.appendChild(row);
  }
}

createGrids(16);
