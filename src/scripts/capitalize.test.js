const capitalizeString = require('./capitalize.js');

it('capitalize first letter', ()=>{
    expect(capitalizeString('batman')).toBe('Batman')
})

it('capitalize first letter', ()=>{
    expect(capitalizeString('man')).toBe('Man')
})