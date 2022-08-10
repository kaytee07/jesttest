"use strict";

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function getAllCapsIndex(str) {
  var newStr = str.split("");
  var caps = [];

  for (var i = 0; i < newStr.length; i++) {
    if (/^[A-Z]+$/.test(newStr[i])) {
      caps.push(i);
    }
  }

  return caps;
}

function getOnlyIndexOfString(input) {
  var inputArr = input.toLowerCase().split("");
  var array = [];
  inputArr.forEach(function (elem) {
    elem = alphabet.indexOf(elem);
    array.push(elem);
  });
  return array;
}

function getIndexOfNonAlphabet(input) {
  var arr = [];

  for (var i = 0; i < input.length; i++) {
    if (input[i] === -1) {
      arr.push(i);
    }
  }

  return arr;
}

function getAlphaAndNonAlpha(input, str) {
  var strArray = str.split("");
  var indexOfNonAlphabet = getIndexOfNonAlphabet(input);
  var preCipher = [];
  input.forEach(function (num) {
    if (num >= 0) {
      num = num + 1;
    }

    if (num > 25) {
      num = 0;
    }

    num = alphabet[num];
    preCipher.push(num);
  });
  indexOfNonAlphabet.forEach(function (num) {
    preCipher[num] = strArray[num];
  });
  return preCipher;
}

function capsLock(alphaIndex, alphainput) {
  alphaIndex.forEach(function (num) {
    alphainput[num] = alphainput[num].toUpperCase();
  });
  return alphainput;
}

function caesarsCipher(input) {
  if (typeof input !== "string") return "strings only";
  var capsIndex = getAllCapsIndex(input);
  console.log(capsIndex);
  var stringIndex = getOnlyIndexOfString(input);
  var alphaAndNonAlpha = getAlphaAndNonAlpha(stringIndex, input);
  return capsLock(capsIndex, alphaAndNonAlpha).join("");
}

module.exports = caesarsCipher;