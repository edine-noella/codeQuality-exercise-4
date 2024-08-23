
function numberFormat(number) {

    if (typeof number !== 'number') throw new Error('Input must be a number');

    let isNegative = number < 0;
    let str = String(number);
    let result = '';
    let count = 0;
    let startIndex = isNegative ? 1 : 0;  // Start at index 1 if it's a negative number to skip the negative sign
    
    for (let i = str.length - 1; i >= startIndex; i--) {
      count++;
      result = str[i] + result;
      if (count % 3 === 0 && i !== startIndex) {
        result = ',' + result;
      }
    }
    
    
    if (isNegative) result = '-' + result;
    
    
    return result;
}

 console.log(numberFormat(-1234567890))