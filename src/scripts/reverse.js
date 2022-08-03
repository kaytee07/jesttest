const reverse = (input) => {
    return typeof input === 'string'? input.split('').reverse().join('') : 'not a string'
 }

module.exports = reverse;