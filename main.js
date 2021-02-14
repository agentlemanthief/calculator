function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(a === 0 || b === 0) {
    alert('You can\'t divide by 0, dumbass!');
    return 0; 
  } else return a / b; 
}

function operate(operator, a, b) {
  let result = Math.round((operator(a, b) + Number.EPSILON) * 10000) / 10000;
  if(result.toString().length >= 14) {
    return result.toExponential(6);
  } else return result;
}

const numberButtons = document.querySelectorAll('.buttons');
const decimalButton = document.querySelector('#decimal');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');
const displayText = document.querySelector('#input-line');

let firstNumber;
let secondNumber;
let operator = '';
let answer = 0;

numberButtons.forEach((number) => {
  number.addEventListener('click', () => {
    if(displayText.textContent === '0') {
      displayText.textContent = '';
    }
    displayText.textContent += number.textContent;
  });
});

decimalButton.addEventListener('click', () => {
  if(displayText.textContent.includes('.')) {
    return;
  } else {
    displayText.textContent += '.';
  }
});

addButton.addEventListener('click', () => {
  if(operator) {
    firstNumber = operate(operator, firstNumber, parseFloat(displayText.textContent));
  } else {
    firstNumber = parseFloat(displayText.textContent);
  }
  displayText.textContent = '';
  operator = add;
});

subtractButton.addEventListener('click', () => {
  if(operator) {
    firstNumber = operate(operator, firstNumber, parseFloat(displayText.textContent));
  } else {
    firstNumber = parseFloat(displayText.textContent);
  }
  displayText.textContent = '';
  operator = subtract;
});

multiplyButton.addEventListener('click', () => {
  if(operator) {
    firstNumber = operate(operator, firstNumber, parseFloat(displayText.textContent));
  } else {
    firstNumber = parseFloat(displayText.textContent);
  }
  displayText.textContent = '';
  operator = multiply;
});

divideButton.addEventListener('click', () => {
  if(operator) {
    firstNumber = operate(operator, firstNumber, parseFloat(displayText.textContent));
  } else {
    firstNumber = parseFloat(displayText.textContent);
  }
  displayText.textContent = '';
  operator = divide;
});

equalsButton.addEventListener('click', () => {
  secondNumber = parseFloat(displayText.textContent);
  displayText.textContent = '';
  answer = operate(operator, firstNumber, secondNumber);
  displayText.textContent = answer;
});

clearButton.addEventListener('click', () => {
  displayText.textContent = 0;
  firstNumber = undefined;
  secondNumber = undefined;
  answer = 0;
  operator = undefined;
});

backspaceButton.addEventListener('click', () => {
  displayText.textContent = displayText.textContent.toString().slice(0, -1);
})