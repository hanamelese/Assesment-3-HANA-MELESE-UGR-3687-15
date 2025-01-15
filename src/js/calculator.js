const inputField = document.getElementById('display');
const buttons = document.getElementsByClassName('btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';
let operator = '';
let firstOperand = null;

function appendToInput(value) {
    currentInput += value;
    inputField.value = currentInput;
}

function clearInput() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    inputField.value = '';
}

function calculate() {
    if (firstOperand === null || operator === '') return;

    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    inputField.value = result;
    currentInput = '';
    firstOperand = result;
    operator = '';
}


for (let btn of buttons) {
    btn.onclick = () => {
        const value = btn.getAttribute('data-value');

        if (btn.classList.contains('operator')) {
            if (currentInput !== '') {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                } else {
                    calculate();
                }
                operator = value;
                currentInput = '';
            }
        } 
        else if (btn.id === 'equals') {
            calculate();
            
        } 
        else if (btn.id === 'clear') {
            clearInput();
        } 
        else {
            appendToInput(value);
        }
    };
}