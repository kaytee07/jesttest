const calculate = require('./calculator.js');

it("addition", () => {
    expect(calculate.add(8,12)).toBe(20)
})

it("subtract", () => {
    expect(calculate.subtract(8,12)).toBe(-4)
})

it("divide", () => {
    expect(calculate.divide(10,2)).toBe(5)
})

it("multiply", () => {
    expect(calculate.multiply(5,5)).toBe(25)
})

it("divide", () => {
    expect(calculate.subtract('a',2)).toBe(5)
})