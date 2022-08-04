"use strict";

var reverse = require('./reverse.js');

it("reverse string", function () {
  expect(reverse("blessed")).toBe('desselb');
});
it("reverse string", function () {
  expect(reverse("blessed")).toBe('desselb');
});
it("reverse string", function () {
  expect(reverse("ANtelope")).toBe('epoletNA');
});
it("string", function () {
  expect(reverse('1234')).toBe('4321');
});