function gridSizeDecide() {
    let gridSize = 0;
    while (gridSize<3 || gridSize>64) {
        gridSize = prompt('Enter Grid Size(3-64):');
    }
        return gridSize;
};

function gridDrawer(gridNumber) {
    squareSize = 960/gridNumber;
    for(let i = 0; i<gridNumber; i++) {
        let row = container.appendChild(document.createElement('div'));
        row.style.width = `${squareSize}px`;
        row.style.height = "960px";
        for(let j = 0; j<gridNumber; j++) {
            const square = document.createElement('div');
            square.className = 'new-div';
            square.setAttribute('style', 'outline: 0.5px solid gray; display;flex;');
            square.style.height = `${squareSize}px`;
            square.style.width = `${squareSize}px`;
            row.appendChild(square);
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = color;
            });

        }
    }  
};

function gridRemover() {
    let theCanvas = document.querySelector('.container');
    while(theCanvas.hasChildNodes()) {
        theCanvas.removeChild(theCanvas.firstChild);
    }
};

let color = 'transparent';
const container = document.querySelector('.container');
let size = 16;
gridDrawer(size);

const gridbtn = document.querySelector('.gridBtn');
gridbtn.addEventListener('click', () => {
    gridRemover();
    size = gridSizeDecide();
    gridDrawer(size);
});

const blackBtn = document.querySelector('.blackBtn');
blackBtn.addEventListener('click', () => window.addEventListener('mouseover', () => color='black'));

const rgbBtn = document.querySelector('.rgbBtn');
rgbBtn.addEventListener('click', () => window.addEventListener('mouseover', () => color=`hsl(${Math.random() * 360}, 100%, 50%)`));

const eraser = document.querySelector('.whiteBtn');
eraser.addEventListener('click', () => window.addEventListener('mouseover', () => color='transparent'));

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => {
    gridRemover();
    gridDrawer(size);
});


