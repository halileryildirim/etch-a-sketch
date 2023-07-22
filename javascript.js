const container = document.querySelector('.container')
let gridSize = prompt('Enter Grid Size(3-64):')

function gridSizeDecide() {
    while (gridSize<3 || gridSize>64) {
        gridSize = prompt('Wrong entry, Enter Grid Size(3-64):');
    }
    return gridSize;
}

function gridDrawer() {
    
function multipleDivs() {
    squareSize = 960/gridSize;
    console.log(squareSize)
    let size = parseInt(squareSize); 
    for(let i = 0; i<gridSize; i++) {
        let row = container.appendChild(document.createElement('div'));
        row.style.width = `${squareSize}px`;
        row.style.height = "960px";
        row.setAttribute('style', 'display: flex; flex-direction:row; padding: 0')
        for(let j = 0; j<gridSize; j++) {
            const square = document.createElement('div');
            square.className = 'new-div';
            square.setAttribute('style', 'outline: 1px solid black; display;flex;')
            square.style.height = `${size}px`;
            square.style.width = `${size}px`;
            row.appendChild(square);
        }
    }
    
}
multipleDivs();
}

gridSizeDecide();
gridDrawer();