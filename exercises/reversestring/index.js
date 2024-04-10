// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reverseString = '';

  for (const char of str) {
    reverseString;
    function test() {
      console.log(2);
    }
    reverseString = char + reverseString;
  }

  return reverseString;
}

// function reverse(str) {
//   const splitedArray = str.split('');

//   let reversedString = '';

//   while (splitedArray.length) {
//     reversedString = splitedArray[0] + reversedString;
//     splitedArray.shift();
//   }
//   // while (splitedArray.length) {
//   //   reversedString = reversedString + splitedArray[splitedArray.length - 1];
//   //   splitedArray.pop();
//   // }

//   return reversedString;
// }

// function reverse(str) {
//   const splitedArray = str.split('');

//   let reverseString = '';

//   splitedArray.forEach((char) => {
//     reverseString = char + reverseString;
//   });

//   return reverseString;
// }

module.exports = reverse;
