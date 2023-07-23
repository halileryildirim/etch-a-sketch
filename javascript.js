let color = 'white';
const container = document.querySelector('.container')

function gridSizeDecide() {
    let gridSize = 0;
    while (gridSize<3 || gridSize>64) {
        gridSize = prompt('Enter Grid Size(3-64):');
    }
        return gridSize;
}

function gridDrawer(gridNumber) {
    squareSize = 960/gridNumber;
    for(let i = 0; i<gridNumber; i++) {
        let row = container.appendChild(document.createElement('div'));
        row.style.width = `${squareSize}px`;
        row.style.height = "960px";
        for(let j = 0; j<gridNumber; j++) {
            const square = document.createElement('div');
            square.className = 'new-div';
            square.setAttribute('style', 'outline: 1px solid black; display;flex;')
            square.style.height = `${squareSize}px`;
            square.style.width = `${squareSize}px`;
            row.appendChild(square);
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = color;
            })

        }
    }  
}

const gridbtn = document.querySelector('.gridBtn');
gridbtn.addEventListener('click', () => {
    let theCanvas = document.querySelector('.container');

    while(theCanvas.hasChildNodes()) {
        theCanvas.removeChild(theCanvas.firstChild);
    }
    gridDrawer(gridSizeDecide());
})
gridDrawer(gridSizeDecide());

