const body = document.querySelector("body");
const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const slider = document.getElementById("myslider");
const size = document.getElementById("size");

size.innerText = slider.value;
slider.oninput = function () {
    size.innerHTML = this.value;
}

reset.addEventListener('click', generateGrid);

function generateGrid () {
    document.getElementById("container").innerText = "";

    let gridSize = window.prompt('How large of a grid?');

    if (gridSize < 1 || gridSize > 100) {
        gridSize = window.prompt('That\'s too big, enter a number less than 100');
    }

    gridGenerator(gridSize);

    for (i=0; i < gridSize*gridSize; i++) {
        const box = document.createElement('div');
        container.appendChild(box);
        box.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "black";
        } );
    }
}

function gridGenerator (width) {
    let columnWidth = Math.round(800/width);
    container.style.gridTemplateColumns = "repeat(" + width + ", " + columnWidth + "px)";
}


generateGrid();