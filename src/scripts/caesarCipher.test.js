const caesarsCipher = require("./caesarCipher.js");

it("simple string", () => {
  expect(caesarsCipher("you are a pretty girl")).toBe("zpv bsf b qsfuuz hjsm");
})

it("simple string", () => {
    expect(caesarsCipher("Dang. girl You're so Pretty;")).toBe("Eboh. hjsm Zpv'sf tp Qsfuuz;");
  })