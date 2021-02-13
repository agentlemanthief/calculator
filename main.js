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
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const zeroButton = document.querySelector('#zero');
const decimalButton = document.querySelector('#decimal');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const displayText = document.querySelector('#input-line');

let firstNumber;
let secondNumber;
let operator = '';
let answer = 0;

oneButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '1';
});

twoButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '2';
});

threeButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '3';
});

fourButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '4';
});

fiveButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '5';
});

sixButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '6';
});

sevenButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '7';
});

eightButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '8';
});

nineButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '9';
});

zeroButton.addEventListener('click', () => {
  if(displayText.textContent === '0' || operator) {
    displayText.textContent = '';
  }
  displayText.textContent += '0';
});

decimalButton.addEventListener('click', () => {
  if(displayText.textContent.includes('.')) {
    return;
  } else {
    displayText.textContent += '.';
  }
});

addButton.addEventListener('click', () => {
  if(firstNumber === undefined) {
    firstNumber = parseFloat(displayText.textContent);
  } else if(operator === add) {
    firstNumber += parseFloat(displayText.textContent);
  } else if(operator === subtract) {
    firstNumber -= parseFloat(displayText.textContent);
  } else if(operator === divide) {
    firstNumber /= parseFloat(displayText.textContent);
  } else if(operator === multiply) {
    firstNumber *= parseFloat(displayText.textContent);
  } 
  displayText.textContent = firstNumber;
  operator = add;
});

subtractButton.addEventListener('click', () => {
  if(firstNumber === undefined) {
    firstNumber = parseFloat(displayText.textContent);
  } else if(operator === add) {
    firstNumber += parseFloat(displayText.textContent);
  } else if(operator === subtract) {
    firstNumber -= parseFloat(displayText.textContent);
  } else if(operator === divide) {
    firstNumber /= parseFloat(displayText.textContent);
  } else if(operator === multiply) {
    firstNumber *= parseFloat(displayText.textContent);
  } 
  displayText.textContent = firstNumber;
  operator = subtract;
});

multiplyButton.addEventListener('click', () => {
  if(firstNumber === undefined) {
    firstNumber = parseFloat(displayText.textContent);
  } else if(operator === add) {
    firstNumber += parseFloat(displayText.textContent);
  } else if(operator === subtract) {
    firstNumber -= parseFloat(displayText.textContent);
  } else if(operator === divide) {
    firstNumber /= parseFloat(displayText.textContent);
  } else if(operator === multiply) {
    firstNumber *= parseFloat(displayText.textContent);
  } 
  displayText.textContent = firstNumber;
  operator = multiply;
});

divideButton.addEventListener('click', () => {
  if(firstNumber === undefined) {
    firstNumber = parseFloat(displayText.textContent);
  } else if(operator === add) {
    firstNumber += parseFloat(displayText.textContent);
  } else if(operator === subtract) {
    firstNumber -= parseFloat(displayText.textContent);
  } else if(operator === divide) {
    firstNumber /= parseFloat(displayText.textContent);
  } else if(operator === multiply) {
    firstNumber *= parseFloat(displayText.textContent);
  } 
  displayText.textContent = firstNumber;
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