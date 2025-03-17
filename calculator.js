const numberBtns = document.getElementsByClassName("number");
const display = document.getElementById("display");
const equalBtn = document.getElementById("equal");
const addBtn = document.getElementsByClassName("addBtn")[0];
const minusBtn = document.getElementsByClassName("minusBtn")[0];
const multiplyBtn = document.getElementsByClassName("multiplyBtn")[0];
const divideBtn = document.getElementsByClassName("divideBtn")[0];
const clearBtn = document.getElementsByClassName("clearBtn")[0];

let operand1 = "";
let operand2 = "";
let operator = "";

for (const btn of numberBtns) {
  btn.addEventListener("click", () => {
    display.innerText += btn.innerText;
  });
}

addBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "+";
  display.innerText = "";
});

minusBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "-";
  display.innerText = "";
});

multiplyBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "x";
  display.innerText = "";
});

divideBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "÷";
  display.innerText = "";
});

equalBtn.addEventListener("click", () => {
  operand2 = display.innerText;
  let result = 0;

  switch (operator) {
    case "+":
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case "-":
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case "x":
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case "÷":
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      console.log("Operation not work");
  }

  display.innerText = result;
  operand1 = result.toString();
  operand2 = "";
  operator = "";
});

clearBtn.addEventListener("click", () => {
  display.innerText = "";
  operand1 = "";
  operand2 = "";
  operator = "";
});
