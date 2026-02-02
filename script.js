let slider = document.getElementById("slider");
let gridSize = document.querySelector(".gridSize");
let colorOption = document.getElementById("color_option");
let grid = document.getElementById("grid");
let rainbow = document.getElementById("rainbow");
let defaultBlack = document.getElementById("defaultBlack");
let erase = document.getElementById("erase");
let clear = document.getElementById("clear");

let rainbowCheck = false;
let inputRange = 16;
let inputColor = "black";
let defaultOn = false;
let rainbowOn = false;
let eraseOn = false;

makeGrid(16);

erase.addEventListener("mousedown", () => {
  eraseOn = !eraseOn;
  if (eraseOn){
    erase.classList.add("hoverring");
  }
  else{
    erase.classList.remove("hoverring");
  }
  rainbowCheck = false;
  inputColor = "white";
});

rainbow.addEventListener("mousedown", () => {
  rainbowCheck = true;
});

clear.addEventListener("mousedown", () => {
  makeGrid(inputRange);
});

defaultBlack.addEventListener("mousedown", () => {
  rainbowCheck = false;
  inputColor = "black";
});

slider.addEventListener("input", () => {
  gridSize.textContent = `${slider.value}X${slider.value}`;
  inputRange = Number(slider.value);
  makeGrid(inputRange);
});

colorOption.addEventListener("input", () => {
  inputColor = colorOption.value;
});

function makeGrid(size){
  grid.innerHTML = "";
  
  for (let i = 0; i < size * size; i++){
    let div = document.createElement("div");
    div.className = "item";
    div.style.flex = `0 0 ${600 / size}px`;
    grid.appendChild(div);
  }
}

grid.addEventListener("mousedown", e => {
  if (e.target.classList.contains("item")){
    if (rainbowCheck){
      e.target.style.backgroundColor = randomColor();
    }
    else{
      e.target.style.backgroundColor = inputColor;
    }
  }

});

let hover = false;

grid.addEventListener("mousedown", (e) =>{
  if (e.button === 0) hover = true;
});
grid.addEventListener("mouseup", () => hover = false);

grid.addEventListener("mouseover", e => {
  if (hover && e.target.classList.contains("item")){
    if (rainbowCheck){
      e.target.style.backgroundColor = randomColor();
    }
    else {
      e.target.style.backgroundColor = inputColor;
    }
  }
});

function randomColor(){
  return `rgba(${Math.random() * 256},
          ${Math.random() * 256},
          ${Math.random() * 256},
          ${(Math.random() * 1.1).toFixed(1)})`
}

