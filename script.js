let operator = '';
let previousValue = '';
let currentValue = '';

//main math functions

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



//operate function that takes an operator and 2 numbers

function operate(operator, a, b) {
  if (operator == 'add') {
    return add(a, b);
  } else if (operator == 'subtract') {
    return subtract(a, b);
  } else if (operator == 'multiply') {
    return multiply(a, b);
  } else return divide(a, b);
};


// components from html

let clear = document.querySelector('#clear-button');
let equal = document.querySelector('#result-button');

let numbers = document.querySelectorAll('.numeric-btn');
let operators = document.querySelectorAll('.operation-btn');

let topDisplay = document.querySelector('.top-display');
let bottomDisplay = document.querySelector('.bottom-display');

clear.addEventListener('click', function () {
  operator = '';
  previousValue = '';
  currentValue = '';
  topDisplay.textContent = '';
  bottomDisplay.textContent = '';
});