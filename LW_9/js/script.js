function digits_numbers(num) {

  const secondNum = document.getElementById('second_num');
  let curr_label = secondNum.textContent;

  if (curr_label === '0' && num !== '.') {
    curr_label = '';
  }

  secondNum.textContent = curr_label + num;
}

function addDot() {
  const secondNum = document.getElementById('second_num');
  let curr_label = secondNum.textContent;

  if (!curr_label.includes('.')) {
    secondNum.textContent = curr_label + '.';
  }
}

function removeNum() {
  const secondNum = document.getElementById('second_num');
  let curr_label = secondNum.textContent;

  if (curr_label.length > 1)
  {
    secondNum.textContent = curr_label.slice(0, -1);
  }
  else {
    secondNum.textContent = '0';
  }
}

let flag_plus = flag_minus = flag_mult = flag_div = false;

function clearAll() {
  const secondNum = document.getElementById('second_num');
  const firstNum = document.getElementById('first_num');
  const operation = document.getElementById('operation');
  secondNum.textContent = '0';
  firstNum.textContent = '';
  operation.textContent = '';
}

let firstNumber = null;
let currentOperation = null;

function setOperation(op) {
  const secondNum = document.getElementById('second_num');

  if (firstNumber === null) {
    firstNumber = parseFloat(secondNum.textContent);
    const firstNum = document.getElementById('first_num');
    firstNum.textContent = firstNumber;
  }

  currentOperation = op;
  const operation = document.getElementById('operation');
  operation.textContent = op;

  secondNum.textContent = '0';
}

function calculate() {

  const secondNum = document.getElementById('second_num');
  const firstNum = document.getElementById('first_num');
  const operation = document.getElementById('operation');
  const secondNumber = parseFloat(secondNum.textContent);
  let result;

  switch (currentOperation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      if (secondNumber === 0) {
        result = 'Error';
      } else {
        result = firstNumber / secondNumber;
      }
      break;
    default:
      result = secondNumber;
  }

  secondNum.textContent = result;
  firstNum.textContent = '';
  operation.textContent = '';

  currentOperation = null;
  firstNumber = null;
}
