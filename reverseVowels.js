
function reverseVowelsInString(string) {

if (typeof string !== 'string') throw new Error('Input must be a string');

  const vowels = 'aeiouAEIOU';
  const stringArr = string.split('');

  let left = 0;
  let right = stringArr.length - 1;

  while (left < right) {
    while (left < right && !vowels.includes(stringArr[left])) { 
        // If the character at the left pointer is not a vowel, move the left pointer to the right
      left++;
    }

    while (left < right && !vowels.includes(stringArr[right])) { 
        // If the character at the right pointer is not a vowel, move the right pointer to the left
      right--;
    }

    const temp = stringArr[left];
    stringArr[left] = stringArr[right];
    stringArr[right] = temp;

    left++;
    right--;
  }

  return stringArr.join('');
}

console.log(reverseVowelsInString('hello')); 