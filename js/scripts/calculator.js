"use strict";

var calculator = {
  add: function add(a, b) {
    return isNumber(a, b) ? a + b : 'values must be numbers';
  },
  subtract: function subtract(a, b) {
    return isNumber(a, b) ? a - b : 'values must be numbers';
  },
  divide: function divide(a, b) {
    return isNumber(a, b) ? a / b : 'values must be numbers';
  },
  multiply: function multiply(a, b) {
    return isNumber(a, b) ? a * b : 'values must be numbers';
  }
};

function isNumber(a, b) {
  return typeof a === 'number' && typeof b === 'number';
}

module.exports = calculator;