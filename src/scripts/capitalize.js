const capitalizeString= (input) => {
    return typeof input === 'string' ? input[0].toUpperCase().concat(input.split('').splice(1).join('')): 'not a string'
};

module.exports = capitalizeString;