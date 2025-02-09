let currentInput = ""
let previousInput = null
let operator = null
let output = 0



const buttons = document.getElementById("grid")
const display = document.getElementById("screen")


//Loop to create the buttons and their identifiers 
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
        newDiv.textContent = "x";
    } else if (i === 14) {
        newDiv.textContent = "C";
    } else if (i === 13) {
        newDiv.textContent = "=";
    } else {
        newDiv.textContent = (i + 1).toString();
    }
    newDiv.addEventListener("click", () => handleButtonClick(newDiv.textContent));
    buttons.appendChild(newDiv);
}


// This function is to handle the input from the user and send it to the display function (updateDisplay)
function handleButtonClick(value){
    if (!isNaN(value)){ //isNaN = "is not a number" so this makes sure it is a number with not not a number
        currentInput += value;
        updateDisplay(currentInput);
        //console.log("1st: ", currentInput) Test for checking the current input
    }
    else if (value === "+" || value === "-" || value ==="/" || value === "x"){
        if(currentInput !== ""){
            
            previousInput = currentInput;
            operator = value;
            currentInput = "";
            
            /**Highlight the selected operator - not working 
            clearOperatorHighlight();
            button.style.backgroundColor(rgb(160, 160, 160));
            */

            updateDisplay(previousInput + " " + operator);
            //console.log(operator); Test operator works 
        }
    }
    else if (value === "="){
        if (operator === "+"){
            output = parseFloat(previousInput) + parseFloat(currentInput)
        }
        else if (operator === "-"){
            output = parseFloat(previousInput) - parseFloat(currentInput)
        }
        else if (operator === "/"){
            output = previousInput / currentInput
        }
        else if (operator === "x"){
            output = previousInput * currentInput
        }
        //console.log(output) test output
        updateDisplay(output)
        display.style.textAlign = 'right'

    }
    else if (value === "C") {
        updateDisplay("")
        currentInput = ("")
        previousInput = null
        operator = null
        display.style.textAlign = 'left'
    }
}

/**  Function to clear operator highlight - not working
function clearOperatorHighlight() {
    
}
*/


// Function used to Display something within the Screen Div
function updateDisplay(value){
    display.textContent = value;
}
