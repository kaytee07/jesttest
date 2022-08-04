const analyzeArray = require('./analyzeArray');

it("analyze numbers", () => {
    expect(analyzeArray([2,3,4,5,6,7,1,3,9])).toEqual({ max: 9, min: 1, length: 9, average: 4 })
})

it("analyze these too", () => {
    expect(analyzeArray([2,3,4,6,"a",7,1,3,9])).toBe("array must contain only numbers")
})

it("analyze numbers", () => {
    expect(analyzeArray([2,3,4,6,9,3,9])).toEqual({ max: 9, min: 2, length: 7, average: 5 })
})