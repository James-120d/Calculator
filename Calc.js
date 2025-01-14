let currentInput = 0  
let previousInput = 0
let operator = 0 

function add() {
    let sum = previousInput += currentInput

}
function subtract() {
    let sum = previousInput -= currentInput
}
function multiply() {
    let sum = previousInput *= currentInput
}
function divide() {
    let sum = previousInput /= currentInput
}

console.log()

const buttons = document.getElementById("grid")

for (let i = 0; i < 12; i++) {
    const newDiv = document.createElement("div")
    newDiv.className = "button";
    newDiv.textContent = (i+1);
    buttons.appendChild(newDiv);
    console.log(newDiv)
}
