"use strict";

var caesarsCipher = require("./caesarCipher.js");

it("simple string", function () {
  expect(caesarsCipher("you are a pretty girl")).toBe("zpv bsf b qsfuuz hjsm");
});
it("simple string", function () {
  expect(caesarsCipher("Dang. girl You're so Pretty;")).toBe("Eboh. hjsm Zpv'sf tp Qsfuuz;");
});