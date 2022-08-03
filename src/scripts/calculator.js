const calculator = {
    add : (a, b)=>{
        return isNumber(a,b)?  a + b : 'values must be numbers';
    },
    subtract: (a, b) => {
        return isNumber(a,b)?  a - b : 'values must be numbers';
    },
    divide: (a, b) => {
        return isNumber(a,b)?  a / b : 'values must be numbers';
    },
    multiply:(a,b) => {
        return isNumber(a,b)?  a * b : 'values must be numbers';
    }
}

function isNumber(a, b){
   return typeof a === 'number' && typeof b === 'number'
}

module.exports = calculator;