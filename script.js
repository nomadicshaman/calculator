let operator = '';
let previousValue = '';
let currentValue = '';




// components from html

let clear = document.querySelector('#clear-button');
let equal = document.querySelector('#result-button');

let numbers = document.querySelectorAll('.numeric-btn');
let operators = document.querySelectorAll('.operation-btn');

let topDisplay = document.querySelector('.top-display');
let bottomDisplay = document.querySelector('.bottom-display');

let backSpace = document.querySelector('#back-space');

backSpace.addEventListener('click', backSpaceFunc);
function backSpaceFunc (){
  bottomDisplay.textContent = bottomDisplay.textContent.slice(0, - 1);
};


clear.addEventListener('click', function () {
  operator = '';
  previousValue = '';
  currentValue = '';
  topDisplay.textContent = '';
  bottomDisplay.textContent = '';
});






// forEach functions for numbers and operators buttons to get the values from html and display them

numbers.forEach((number) => number.addEventListener('click', function (e) {
  callNumber(e.target.textContent);
  bottomDisplay.textContent = currentValue;

}));

operators.forEach((op) => op.addEventListener('click', function (e) {
  callOperator(e.target.textContent);
  topDisplay.textContent = previousValue + ' ' + operator;
  bottomDisplay.textContent = currentValue;
}));



function callNumber(num) {
  if (currentValue.length < 5) {
    currentValue += num;
  }
};

function callOperator(oper) {
  operator = oper;
  previousValue = currentValue;
  currentValue = '';
};

//operate function that takes an operator and 2 numbers

function operate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator == '+') {
    previousValue += currentValue;
  } else if (operator == '-') {
    previousValue -= currentValue;
  } else if (operator == '*') {
    previousValue *= currentValue;
  } else if (operator == '/'){
    if(currentValue == 0) {
      alert('error bitch! you can not divide by 0!');
      operator = '';
      previousValue = '';
      currentValue = '';
      topDisplay.textContent = '';
      bottomDisplay.textContent = '';
      return;
    }
    previousValue /= currentValue;
  };

  previousValue = previousValue.toString();
  currentValue = previousValue.toString();


};


equal.addEventListener('click', function () {
  operate();
  topDisplay.textContent = '';
  if (previousValue.length <= 9) {
    bottomDisplay.textContent = previousValue;
  } else {
    bottomDisplay.textContent = previousValue.slice(0, 9) + '...';
  }


});