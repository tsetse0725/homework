const numberBtns = document.getElementsByClassName("number");
const display = document.getElementById("display");
const equalBtn = document.getElementById("equal");
const addBtn = document.getElementsByClassName("addBtn")[0];
const minusBtn = document.getElementsByClassName("minusBtn")[0];
const multiplyBtn = document.getElementsByClassName("multiplyBtn")[0];
const divideBtn = document.getElementsByClassName("divideBtn")[0];
const clearBtn = document.getElementsByClassName("clearBtn")[0];
const decimalBtn = document.getElementsByClassName("decimalBtn")[0];

let operand1 = "";
let operand2 = "";
let operator = "";
let decimalCount = 0;

for (const btn of numberBtns) {
  btn.addEventListener("click", () => {
    if (display.innerText.includes(".")) {
      decimalCount++;
    }
    display.innerText += btn.innerText;
  });
}

addBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "+";
  display.innerText = "";
  decimalCount = 0;
});

minusBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "-";
  display.innerText = "";
  decimalCount = 0;
});

multiplyBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "x";
  display.innerText = "";
  decimalCount = 0;
});

divideBtn.addEventListener("click", () => {
  operand1 = display.innerText;
  operator = "÷";
  display.innerText = "";
  decimalCount = 0;
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

  if (decimalCount > 0) {
    display.innerText = result.toFixed(decimalCount);
  } else {
    display.innerText = result.toString();
  }
  operand1 = display.innerText;
  operand2 = "";
  operator = "";
  decimalCount = 0;
});

clearBtn.addEventListener("click", () => {
  display.innerText = "";
  operand1 = "";
  operand2 = "";
  operator = "";
  decimalCount = 0;
});

decimalBtn.addEventListener("click", () => {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
});
