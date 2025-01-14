//Calculator
//----------------------
//1. Initialize variables:
//currentInput to store the current number.
//previousInput to store the previous number.
//operator to store the selected operator.

//2. Write a function handleNumberInput(number):
//Append the selected number to currentInput.
//Update the display.

//3. Write a function handleOperatorInput(op):
//Store the currentInput in previousInput.
//Save the selected operator in operator.
//Clear currentInput.

//4. Write a function clearCalculator():
//Reset currentInput, previousInput, and operator to empty values.
//Update the display to show 0.

//5. Write a function calculateResult():
//Parse previousInput and currentInput as numbers.
//Perform the operation based on the operator.
//Update currentInput with the result.
//Reset previousInput and operator.

//6. Add event listeners to buttons:
//On number buttons, call handleNumberInput().
//On operator buttons, call handleOperatorInput().
//On clear button, call clearCalculator().
//On equals button, call calculateResult().

let currentInput = 0
let previousInput = 0
let operator = 0 

const buttons = document.getElementById("grid")

for (let i = 0; i < 9; i++) {
    const newDiv = document.createElement("div")
    newDiv.className = "button";
    newDiv.textContent = (i+1);
    buttons.appendChild(newDiv);
    console.log(newDiv)
}

//This is a line to see if github tracks the changes 

