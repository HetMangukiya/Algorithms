// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Optimized
function palindrome(str) {
  const splitArray = str.split('').slice(0, Math.ceil(str.length / 2));

  return splitArray.every((char, index) => {
    return char === str[str.length - 1 - index];
  });
}

// Bad
// function palindrome(str) {
//   const splitArray = str.split('');
//   return splitArray.every((char, index) => {
//     return char === str[str.length - 1 - index];
//   });
// }

// function palindrome(str) {
//   const reversedString = str.split('').reverse().join('');
//   return str === reversedString;
// }

module.exports = palindrome;
