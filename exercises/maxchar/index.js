// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  const maxChar = { char: '', num: 0 };
  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (const char in charMap) {
    if (charMap[char] > maxChar.num) {
      maxChar.char = char;
      maxChar.num = charMap[char];
    }
  }

  return maxChar.char;
}

maxChar('The quick brown fox jumped over the lazy dog.');

module.exports = maxChar;
