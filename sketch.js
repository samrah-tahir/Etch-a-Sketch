
function createGrid(numOfSq){

    // console.log(numOfSq)
    let numOfBoxes = numOfSq;
    const gridLen = 500; //500 x 500

    let widthPerBox = gridLen/numOfBoxes;
    let heightPerBox = widthPerBox;

    let gridBox = document.querySelector(".grid");
    gridBox.style.display = "flex";
    gridBox.style.flexWrap = "wrap";
    gridBox.innerHTML = '';
    clearGrid(gridBox);
    for(let i = 0; i < numOfBoxes * numOfSq; i++){
        let box = document.createElement("div");

        box.classList.add("grid-element");
        box.style.width = widthPerBox.toString()+"px";
        box.style.height = heightPerBox.toString()+"px";
        gridBox.appendChild(box);
    }
    hoverEffect();
}

function clearGrid(gridBox){
    gridBox.innerHTML = '';
}

function hoverEffect(){
    let grid_Elements = document.querySelectorAll(".grid-element");

    grid_Elements.forEach( (element) => {
        element.addEventListener("mouseover", changeColor);
    });
    // console.log(grid_Elements);

}

function changeColor(e){
    if(e.type === "mouseover") 
        e.target.style.backgroundColor = "black";
}

function getSize(){
    let submit = document.querySelector('input[type="button"]');
    defaultGrid();
    submit.addEventListener('click', () => createGrid(limitCheck(Number(document.querySelector('input[name="size"]').value))));
}

function defaultGrid(){
    createGrid(6);
}

function limitCheck(size){
    console.log(size);
    if( !(size >= 6 && size <= 100)) 
        return 6;  
    else  
        return size;
}


let clearButton = document.querySelector(".btn-clear");
clearButton.addEventListener('click', () => createGrid(6));
getSize();