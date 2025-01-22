let currentInput = 0;
let previousInput = 0;
let operator = 0;

const buttons = document.getElementById("grid")

//Button creation + identifiers

for (let i = 0; i < 15; i++) {
    const newDiv = document.createElement("div")
    newDiv.className = "button";
    if (i === 9) {
        newDiv.textContent = "+";
    } else if (i === 10) {
        newDiv.textContent = "-";
    } else if (i === 11) {
        newDiv.textContent = "/";
    } else if (i === 12) {
        newDiv.textContent = "=";
    } else if (i === 14) {
        newDiv.textContent = "C";
    } else if (i === 13) {
        newDiv.textContent = ".";
    } else {
        newDiv.textContent = (i + 1).toString();
    }
    newDiv.addEventListener("click", () => {
        currentInput = (i + 1)
    })
    buttons.appendChild(newDiv);
    console.log(newDiv)
}

// Operator Functions
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





/*
function operator(oper) {
    if oper == ("+"){

    }
    else if oper == ("-"){

    }
    else if oper == ("*"){

    }
    else if oper == ("/"){

    }
}
*/
