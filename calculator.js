const numberbtns = document.getElementsByClassName("number");
const display = document.getElementById("display");
const addBtn = document.getElementsByClassName("addBtn")[0];
const equalBtn = document.getElementById("equal");
const minusBtn = document.getElementById("minusBtn")[0]
let operand1 = "";
let operand2 = "";
let operator = "";

console.log("btns:", numberbtns)



for(const btn of numberbtns){
    btn.addEventListener("click", () => {
        console.log("clicked", btn.innerText);
        display.innerText = display.innerText + btn.innerText
    });
}


addBtn.addEventListener("click", () => {
    console.log("clicked-add");
    operand1 = display.innerText;
    display.innerText = "";
});

minusBtn.addEventListener("click", () => {
    console.log("clicked-minus");
    operand1 = display.innerText;
    display.innerText = "";
})

equalBtn.addEventListener("click", () => {
    operand2 = display.innerText;
    let result = 0;
    const result = parseFloat(operand1) + parseFloat(operand2);
    if(operator === "+"){
        const result = parseFloat(operand1) + parseFloat(operand2);
    }else if(operator === "-"){
        const result = parseFloat(operand1) - parseFloat(operand2);
    }

    switch(operator){
        case "+": {
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        }
        case "-": {
            result = parseFloat(operand1) - parseFloat(operand2):
            break;
        }

        default:
            console.log("operation not work");
    }
    display.innerText = result
})

