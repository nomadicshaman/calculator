 //main math functions

 function add(a,b) {
    return a+b;
 }

 function subtract (a,b) {
    return a-b;
 }

 function multiply (a,b) {
    return a*b;
 }

 function divide (a,b) {
    return a/b;
 }

 

 //operate function that takes an operator and 2 numbers

 function operate (operator, a, b) {
    if (operator == 'add') {
        return add(a,b);
    } else if (operator == 'subtract') {
        return subtract(a,b);
    } else if (operator == 'multiply') {
        return multiply(a,b);
    } else return divide(a,b);
 }