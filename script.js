startSketch(16); // initial grid

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", handleClearButtonClick);

const colorValues = {}; // object to store initial color values

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
  if (e.target.style.backgroundColor === "") {
    e.target.style.backgroundColor = randomRGB();

    colorValues[e.target.id] = {
      rgb: e.target.style.backgroundColor,
      times: 1,
    };
  } else {
    e.target.style.backgroundColor = darkenRGB(e.target.id);
  }
}

function handleClearButtonClick(e) {
  let selectedSize;
  do {
    selectedSize = prompt("Input Desired Grid Size: (Max Size: 100)");
  } while (
    parseInt(selectedSize) > 100 ||
    isNaN(parseInt(selectedSize)) ||
    selectedSize === null ||
    selectedSize === ""
  );
  startSketch(parseInt(selectedSize));
}

function randomRGB() {
  const random256 = () => Math.floor(Math.random() * 256);
  const r = random256();
  const g = random256();
  const b = random256();
  return `rgb(${r},${g},${b})`;
}

function darkenRGB(gridID) {
  let rgb = colorValues[gridID].rgb;
  let times = colorValues[gridID].times;

  if (times >= 10) {
    return "rgb(0,0,0)";
  }

  rgb = rgb.replace(/[^\d,]/g, "").split(",");

  const r = parseInt(rgb[0]) * (1 - times * 0.1);
  const g = parseInt(rgb[1]) * (1 - times * 0.1);
  const b = parseInt(rgb[2]) * (1 - times * 0.1);

  colorValues[gridID].times += 1;

  return `rgb(${r},${g},${b})`;
}
