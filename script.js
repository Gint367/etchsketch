function createGrid() {
    let container = document.getElementById("grid-container");
    for (let i = 0; i < 800; i++) {
        let square = document.createElement("div");
        square.className = "grid-square";
        container.appendChild(square);
    }
}
function changeColor(div) {
    let r = Math.floor(Math.random() * 256); // a random number between 0 and 255
    let g = Math.floor(Math.random() * 256); // a random number between 0 and 255
    let b = Math.floor(Math.random() * 256); // a random number between 0 and 255
    let color = "rgb(" + r + "," + g + "," + b + ")"; // a random color value
    div.style.backgroundColor = color; // change the background color of the div
}
function makedarker(div){
    div.style.filter.brightness = 0.7;
}
function addHoverEffect() {
    let squares = document.getElementById("grid-container").children;
    for (let index = 0; index < squares.length; index++) {
        squares[index].addEventListener("mouseover", function(){
            changeColor(this);
        })
        
    }
}
function changeGridSize () {
    let size = prompt("Enter new grid number(max 100)")
    size = parseInt(size);
    if (size && size > 0 && size <= 100) { // check if the input is valid
        let container = document.getElementById("grid-container"); // get the grid container element
        container.innerHTML = ""; // clear the existing grid items
        console.log("Grid cleared");
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // set the number of columns based on the input
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // set the number of rows based on the input
        for (let i = 0;i < size*size;i++) {
            let square = document.createElement("div");
            square.className = "grid-square";
            container.appendChild(square);
        }
        addHoverEffect();
    } else {
        alert("Invalid input, enter number between 1 and 100");
    }
}
window.onload = function() {
    createGrid();
    addHoverEffect();
}