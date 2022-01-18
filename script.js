const body = document.querySelector("body");
const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const slider = document.getElementById("myslider");
const size = document.getElementById("size");

size.innerText = slider.value;
slider.oninput = function () {
    size.innerHTML = this.value;
}

reset.addEventListener('click', resetGrid);

function resetGrid () {
    document.getElementById("container").innerText = "";
    generateGrid();
}

function generateGrid () {
    let gridSize = slider.value;

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