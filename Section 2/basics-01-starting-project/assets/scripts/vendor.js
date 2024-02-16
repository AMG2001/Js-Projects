const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

let lastValue = 0;

/*###################################################################################
 *###################################################################################
 *                              Set Buttons Functions .
 *###################################################################################
 *###################################################################################
 */

addBtn.addEventListener("click", addNumber);
subtractBtn.addEventListener("click", subNumber);
multiplyBtn.addEventListener("click", mulNumber);
divideBtn.addEventListener("click", divNumber);
/*###################################################################################
 *###################################################################################
 *                             Buttons Functionallity .
 *###################################################################################
 *###################################################################################
 */

function addNumber() {
  let number = Number.parseInt(userInput.value); // Specify base 10
  if (isNaN(number)) {
    outputResult("Error: Please enter a valid number.");
    return;
  }
  lastValue += number;
  outputResult(lastValue, "");
}

function subNumber() {
  let number = Number.parseInt(userInput.value); // Specify base 10
  if (isNaN(number)) {
    outputResult("Error: Please enter a valid number.");
    return;
  }
  lastValue -= number;
  outputResult(lastValue, "");
}

function mulNumber() {
  let number = Number.parseInt(userInput.value); // Specify base 10
  if (isNaN(number)) {
    outputResult("Error: Please enter a valid number.");
    return;
  }
  lastValue *= number;
  outputResult(lastValue, "");
}

function divNumber() {
  let number = Number.parseInt(userInput.value); // Specify base 10
  if (isNaN(number)) {
    outputResult("Error: Please enter a valid number.");
    return;
  }
  lastValue /= number;
  outputResult(lastValue, "");
}

/*###################################################################################
 *###################################################################################
 *                             Handle Showing Results .
 *###################################################################################
 *###################################################################################
 */
function outputResult(result, text = "") {
  // Allow optional text
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
