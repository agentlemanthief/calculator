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

const displayArea = document.querySelector('#display');

const displayText = document.querySelector('#input-line');

oneButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
    displayText.textContent = '';
  }
  displayText.textContent += '1';
});

twoButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
    displayText.textContent = '';
  }
  displayText.textContent += '2';
});

threeButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
    displayText.textContent = '';
  }
  displayText.textContent += '3';
});

fourButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
    displayText.textContent = '';
  }
  displayText.textContent += '4';
});

fiveButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
    displayText.textContent = '';
  }
  displayText.textContent += '5';
});

sixButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
    displayText.textContent = '';
  }
  displayText.textContent += '6';
});

sevenButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
    displayText.textContent = '';
  }
  displayText.textContent += '7';
});

eightButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
    displayText.textContent = '';
  }
  displayText.textContent += '8';
});

nineButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
    displayText.textContent = '';
  }
  displayText.textContent += '9';
});

zeroButton.addEventListener('click', () => {
  if(displayText.textContent === '0') {
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
  
});

subtractButton.addEventListener('click', () => {
  
});

multiplyButton.addEventListener('click', () => {
  
});

divideButton.addEventListener('click', () => {
  
});

equalsButton.addEventListener('click', () => {
  
});