let currentInput = '';
let currentOperation = '';
const display = document.getElementById('display');
const toggleThemeButton = document.getElementById('toggle-theme');
let isDarkTheme = false;

function appendNumber(number) {
    if (currentInput === 'Error') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDot() {
    if (currentInput === 'Error') {
        currentInput = '.';
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function appendOperation(operation) {
    if (currentInput === '' && currentOperation === '') return;
    if (currentInput === '' && currentOperation !== '') {
        // Replace the last operator if needed
        currentOperation = currentOperation.slice(0, -2) + ` ${operation} `;
    } else {
        currentOperation += `${currentInput} ${operation} `;
        currentInput = '';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    updateDisplay();
}

function calculate() {
    if (currentInput === '' && currentOperation === '') return;

    if (currentInput !== '') {
        currentOperation += currentInput;
    }

    try {
        // Use a safer way to evaluate the expression
        const result = eval(currentOperation);
        currentInput = result.toString();
    } catch (e) {
        currentInput = 'Error';
    }
    currentOperation = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentOperation + currentInput || '0';
}

toggleThemeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.style.backgroundColor = isDarkTheme ? '#333' : '#fff';
    display.style.backgroundColor = isDarkTheme ? '#222' : '#333';
    display.style.color = isDarkTheme ? '#fff' : '#fff';
    document.querySelectorAll('.btn').forEach(button => {
        button.style.backgroundColor = isDarkTheme ? '#555' : '#f0f0f0';
        button.style.color = isDarkTheme ? '#fff' : '#000';
        button.style.border = isDarkTheme ? '1px solid #444' : '1px solid #ddd';
    });
});
