function createGrids(n) {
  const gridContainer = document.querySelector("#grid-container");
  for (let i = 1; i <= n; i++) {
    let grid = document.createElement("div");
    grid.id = `grid-${i}`;
    grid.classList.add("grid-block");
    grid.style.width = "16px";
    grid.style.height = "16px";
    gridContainer.appendChild(grid);
  }
}

createGrids(16);
