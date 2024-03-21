const numberButtons = document.getElementsByClassName("number");
console.log("Buttons", numberButtons)
const display = document.getElementById("display_value");
console.log("display", display);
const operatorButtons = document.getElementsByClassName("operator");
console.log("operator", operatorButtons);
const clear = document.getElementsByClassName("clear")[0];
const addition = document.getElementsByClassName("addition");
const equation = document.getElementById("equation");
const dot = document.getElementById("dot");
console.log(dot)

let operand1 = 0;
let operand2 = 0;
let operator = null;


for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", (event) => {
        console.log("daragdlaa", event.target.textContent)
        display.textContent += event.target.textContent;
    })
}


clear.addEventListener("click", () => {
    display.textContent = "";
})
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", (event) => {
        console.log("operator", event.target.textContent);
        operand1 = parseFloat(display.textContent);
        operator = event.target.textContent;
        display.innerHTML = "";
    });
}

const add = (a, b) => {
    return a + b;
}

const minus = (a, b) => {
    return a - b;
}
const multiplying = (a, b) => {
    return a * b
}
const divide = (a, b) => {
    return a / b
}

addition[0].addEventListener("click", () => {
    const invert = parseFloat(display.textContent)
    display.textContent = -invert;
})
addition[1].addEventListener("click", () => {
    const percentage = parseFloat(display.textContent)
    display.textContent = percentage * 0.01;
})



dot.addEventListener("click", () => {
    if (display.textContent.indexOf(".")===-1){
    display.textContent += "."
    }
})
equation.addEventListener("click", () => {
    let result = 0;
    operand2 = parseFloat(display.innerHTML);
    if ("+" === operator) {
        result = add(operand1, operand2).toFixed(2);
    }
    else if ("-" === operator) {
        result = minus(operand1, operand2).toFixed(2);
    }
    else if ("÷" === operator) {
        result = divide(operand1, operand2).toFixed(2);
    }
    else if ("x" === operator) {
        result = multiplying(operand1, operand2).toFixed(2);
    }
    else {
        display.innerHTML = fail;
    }
    display.innerHTML = result;
})