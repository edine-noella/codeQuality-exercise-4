
function convertRomanToNumber(roman) {

  if (typeof roman !== 'string') throw new Error('Input must be a string')

  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = 0

  for (let i = 0; i < roman.length; i++) {

    if (romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) { 
      result += romanNumerals[roman[i + 1]] - romanNumerals[roman[i]] 
      i++
    }
    else {
      result += romanNumerals[roman[i]]
    }
    }
    return result
}

console.log(convertRomanToNumber('IV')) 