// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseStr(str) {}

function reverseInt(n) {
  const str = n.toString().replace('-', '');
  const strReversed = str.split('').reverse().join('');
  const revNum = Number(strReversed) * Math.sign(n);
  return revNum;
}

module.exports = reverseInt;
