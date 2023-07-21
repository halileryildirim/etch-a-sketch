function createDiv() {
    var boardDiv = document.createElement("div");
    boardDiv.className = 'new-div';
    boardDiv.textContent = 'TEST';
    boardDiv.setAttribute('style', 'color:white; background: black;');

    return boardDiv;
}

function modifyDivs(numOfDivs){
    myDivs = [];
    i = 0;

    for (i; i<numOfDivs; i++) {
        myDivs.push(createDiv());
        document.querySelector(".container").appendChild(myDivs[i]);
    }
}

modifyDivs(9);