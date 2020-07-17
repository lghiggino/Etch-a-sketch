console.log("hello, and welcome to my code. :D")

//INITIALIZATIONS
const resetButton = document.querySelector("#reset");
const resizeButton = document.querySelector("#sizing");
const rgbButton = document.querySelector("#rgb");
const fadeButton = document.querySelector("#fade2black");

const mother = document.querySelector("#mother");

//MOUSE EVENTS
resetButton.addEventListener("click", reseter);
resizeButton.addEventListener("click", resizer);
rgbButton.addEventListener("click", random);
fadeButton.addEventListener("click", fader);

    
//FUNCTIONS
function createGrid(squareSide){
    mother.style.gridTemplateColumns = `repeat(${squareSide}, 1fr)`;
    mother.style.gridTemplateRows = `repeat(${squareSide}, 1fr)`;
    let squared = squareSide**2
    for (i = 0; i < squared; i++){
        const box = document.createElement("div");
        box.classList.add("default");
        box.addEventListener("mouseover", changeColor);
        box.style.backgroundColor = "rgba(245,245,245,1)";
        mother.appendChild(box);
    }
}
    
function changeColor(event){
    let currentBackgroundColor = window.getComputedStyle(event.target)["background-color"];
    switch(drawingStyle){
        case "rgb":
        event.target.style.backgroundColor = randomRGB();
        break;
        case "fade2black":
        event.target.style.backgroundColor = shader(0.8, currentBackgroundColor);
        break;
        default:
        event.target.style.backgroundColor = "rgb(0,0,0)";
    }
}
    
function reseter(){
    let box = document.querySelectorAll(".default");
    box.forEach(function(element) {
        element.style.backgroundColor = "rgba(245,245,245,1)";
    });
    drawingStyle = "rgba(0,0,0,1)"
}

function resizer(){
    squareSide = prompt("How many squares per side on your grid? Max 100", "16");
    if (squareSide > 100){
        squareSide = 100;
    } else if (squareSide <= 0){
        squareSide = 2;
        alert("aren't you silly?  hummm...")
    } else if (isNaN(squareSide)){
        squareSide = 16;
        alert("aren't you silly?  hummm...")
    }
    while(mother.hasChildNodes()){
        mother.removeChild(mother.firstChild);
    }
    createGrid(squareSide);
}

function randomRGB(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`; 
}

function shader(p, color){ //thanks to kjell-fjeldsaunet 
    const colors = color.match(/[0-9]{1,3}/g);
    for (let i = 0; i < colors.length; i++) {
        colors[i] = Math.round(colors[i] * p);
    }
    return `rgb(${colors[0]},${colors[1]},${colors[2]})`
}

function random(e){
    drawingStyle = e.target.id;
}

function fader(e){
    drawingStyle = e.target.id;
}

let squareSide = 16;
let drawingStyle = "rgb(0,0,0)"
createGrid(squareSide);
let children = document.querySelectorAll(".default");
        
    

