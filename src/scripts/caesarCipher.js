const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
                    "w","x","y","z"];

function getAllCapsIndex(str){
let newStr = str.split("");
let caps = []

    for(let i = 0 ; i < newStr.length; i++){
        if(/^[A-Z]+$/.test(newStr[i])){
            caps.push(i)
         }
    }
    return caps
}   

function getOnlyIndexOfString(input){
    let inputArr = input.toLowerCase().split("")
    let array = [] 
    inputArr.forEach(elem=> {
        elem = alphabet.indexOf(elem)
        array.push(elem)
    })
    return array
}

function getIndexOfNonAlphabet(input){
    let arr = []
    for(let i = 0; i < input.length; i++){
        if(input[i] === -1){
            arr.push(i)
        }
    }
    return arr
}

function getAlphaAndNonAlpha(input, str){
    let strArray = str.split("");
    let indexOfNonAlphabet = getIndexOfNonAlphabet(input);
    let preCipher = [];
    input.forEach(num => {
        if(num >= 0){
            num = num+1;
        } 

        if(num > 25){
            num = 0
        }

        num = alphabet[num]
        preCipher.push(num)
       })
    indexOfNonAlphabet.forEach(num => {
        preCipher[num] = strArray[num]
    })
    return preCipher  
}

function capsLock(alphaIndex,alphainput){
    alphaIndex.forEach(num => {
        alphainput[num] = alphainput[num].toUpperCase()
    })

    return alphainput  
}

function caesarsCipher(input){
   if(typeof input !=="string") return "strings only"
   let capsIndex = getAllCapsIndex(input);
   console.log(capsIndex)
   let stringIndex = getOnlyIndexOfString(input);
   let alphaAndNonAlpha = getAlphaAndNonAlpha(stringIndex, input);
   return capsLock(capsIndex,alphaAndNonAlpha).join("")
}

module.exports = caesarsCipher;
