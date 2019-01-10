const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");


resetButton.addEventListener('click', resetGrid);
sideLength = 16;

function resetGrid () {
    boxes = document.querySelectorAll(".box");
    boxes.forEach(
        (box) => {
            container.removeChild(box);
        }
    )
    sideLength = prompt("Choose side length");
    setUpBoxes(sideLength);
}



function setUpBoxes (sideLength){
    numBoxes = sideLength**2;
    boxLength = 320 / sideLength;

    for (i=0; i < numBoxes; i++) {
        div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.setAttribute('style', `width:${boxLength}; height: ${boxLength};`));
    boxes.forEach(box => box.addEventListener("mouseover", () => {
    box.setAttribute('style', 
    `width:${boxLength}; 
    height: ${boxLength};
    background:red;
    border-style: solid;
    border-color: black;
    border-width: 0.05px;
    display: inline-block;
    box-sizing: border-box;
    `);
}))

console.log('side length is: ' + sideLength);
console.log('box length is: ' + boxLength);
console.log('number of boxes is: ' + numBoxes);
};

setUpBoxes(sideLength);

