"use strict";

var capitalizeString = require('./capitalize.js');

it('capitalize first letter', function () {
  expect(capitalizeString('batman')).toBe('Batman');
});
it('capitalize first letter', function () {
  expect(capitalizeString('man')).toBe('Man');
});