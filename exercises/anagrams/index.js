// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createCharMap(string) {
  const charMap = {};

  for (const char of string) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
}

function anagrams(stringA, stringB) {
  const trimmedStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const trimmedStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
  if (trimmedStringA.length !== trimmedStringB.length) {
    console.log('isAnagram - isAnagram:', false);
    return false;
  }
  const stringACharMap = createCharMap(trimmedStringA);
  const stringBCharMap = createCharMap(trimmedStringB);
  const isAnagram = Object.keys(stringACharMap).every((val, index, arr) => {
    console.log('val: ', val);
    return stringBCharMap[val] === stringACharMap[val];
  });
  console.log('isAnagram - isAnagram:', isAnagram);
  return isAnagram;
}

// anagrams(
//   process.argv[2].replace(/(?<!\\)'/g, '"'),
//   process.argv[3].replace(/(?<!\\)'/g, '"')
// );

module.exports = anagrams;
