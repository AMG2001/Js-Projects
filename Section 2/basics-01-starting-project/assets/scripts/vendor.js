const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

var result = 0;

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
  let number = getEnteredNumber();
  let eq = `${result} + ${number}`;
  result += number;
  showEquationAndResult(eq, result);
}

function subNumber() {
  let number = getEnteredNumber();
  let eq = `${result} - ${number}`;
  result -= number;
  showEquationAndResult(eq, result);
}

function mulNumber() {
  let number = getEnteredNumber();
  let eq = `${result} * ${number}`;
  result *= number;
  showEquationAndResult(eq, result);
}

function divNumber() {
  let number = getEnteredNumber();
  let eq = `${result} / ${number}`;
  result /= number;
  showEquationAndResult(eq, result);
}

/*###################################################################################
 *###################################################################################
 *                             Handle Showing Results .
 *###################################################################################
 *###################################################################################
 */

/**
 * is used to get the entered value in input field and return it as Number .
 * @returns Number value .
 */
function getEnteredNumber() {
  return parseInt(userInput.value);
}

function showEquationAndResult(equation, result) {
  // Allow optional text
  currentResultOutput.textContent = `${result}`;
  currentCalculationOutput.textContent = `${equation}`;
}
