"use strict";

var calculate = require('./calculator.js');

it("addition", function () {
  expect(calculate.add(8, 12)).toBe(20);
});
it("subtract", function () {
  expect(calculate.subtract(8, 12)).toBe(-4);
});
it("divide", function () {
  expect(calculate.divide(10, 2)).toBe(5);
});
it("multiply", function () {
  expect(calculate.multiply(5, 5)).toBe(25);
});
it("divide", function () {
  expect(calculate.subtract('a', 2)).toBe(5);
});