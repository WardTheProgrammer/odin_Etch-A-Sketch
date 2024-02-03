const grid = document.getElementById("grid");
const resetButton = document.getElementById("resetButton");
const gridInput = document.getElementById("createGrid");
const random = document.getElementById("randomColor");
const eraser = document.getElementById("eraser");
let penDown = "true";
let num = "16";
let gridColor = "black";

function createGrid(num) {
  for (let i = 0; i < num**2; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function(event) {
      if (penDown) {
        if (gridColor === "random") {
          event.target.style.backgroundColor = generateRandomColor();
        } else {
          event.target.style.backgroundColor = gridColor;
        }
      }
    })
    div.addEventListener("click", function(event) {
      penDown = !penDown;
      if (penDown) {
        event.target.style.backgroundColor = gridColor;
      }
    })
    grid.appendChild(div);
  }
  grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  resetButton.addEventListener("click", function() {
    let cell = grid.children;
    for (let i = 0; i < num**2; i++) {
      cell[i].style.backgroundColor = "white";
    }
  });
}

gridInput.addEventListener("click", function(){
  let num = document.getElementById("gridSize").value;
  while(grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
  createGrid(num)
});

function generateRandomColor() {
  let color = "";
  for(let i = 0; i < 3; i++) {
    let randNum = Math.floor(Math.random() * 256);
    color += randNum;
    color += " ";
  }
  color = "rgb(" + color + ")";
  console.log(color)
  return color;
}

random.addEventListener("click", function () {
    if (gridColor === "random") {
      gridColor = "black";
    } else {
      gridColor = "random";
    }
  });
  eraser.addEventListener("click", function () {
    if (gridColor == "white") {
      gridColor = "black";
    } else {
      gridColor = "white";
    }
  });

createGrid(num);
