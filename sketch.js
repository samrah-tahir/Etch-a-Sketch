function createGrid(numOfSq){
    let numOfBoxes = numOfSq;
    const gridLen = 500; //500 x 500

    let widthPerBox = gridLen/numOfBoxes;
    let heightPerBox = widthPerBox;
    
    // let gridBox = document.querySelector(".grid");
    let gridBox = document.querySelector(".grid");
    gridBox.style.display = "flex";
    gridBox.style.flexWrap = "wrap";

    for(let i = 0; i < numOfBoxes * numOfSq; i++){
        let box = document.createElement("div");
        box.classList.add("grid-element");
        box.style.width = widthPerBox.toString()+"px";
        box.style.height = heightPerBox.toString()+"px";
        
        gridBox.appendChild(box);
    }
    // hoverEffect();
}

function hoverEffect(){
    let grid_Elements = document.querySelectorAll(".grid-element");

    grid_Elements.forEach( (element) => {
        element.addEventListener()
    });
    console.log(grid_Elements);

}
createGrid(6);