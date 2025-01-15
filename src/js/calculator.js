const inputField = document.getElementById('display');
const buttons = document.getElementsByClassName('btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';

function appendToInput(value) {
    currentInput += value;
    inputField.value = currentInput;
}

function clearInput() {
    currentInput = '';
    inputField.value = '';
}

function calculate() {
    try {
        const result = Function('"use strict";return (' + currentInput + ')')();
        inputField.value = result;
        currentInput = result.toString();
    } catch (error) {
        inputField.value = 'Error';
        currentInput = '';
    }
}

for (let btn of buttons) {
    btn.onclick = () => {
        const value = btn.getAttribute('data-value');

        if (btn.id === 'clear') {
            clearInput();
        } else if (btn.id === 'equals') {
            calculate();
        } else {
            appendToInput(value);
        }
    };
}

