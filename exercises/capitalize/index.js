// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split(' ');
  console.log(process.env);
  const result = arr.reduce((acc, curr) => {
    const capitalizedString = curr[0].toUpperCase() + curr.slice(1);
    return `${acc}${acc !== '' ? ' ' : ''}${capitalizedString}`;
  }, '');

  console.log('result: ', result);

  return result;
}

// function capitalize(str) {
//   const strArray = str.split(' ');

//   strArray.forEach((word, index) => {
//     const capitalizedWord = `${word.slice(0, 1).toUpperCase()}${word.slice(
//       1,
//       word.lenght
//     )}`;
//     strArray[index] = capitalizedWord;
//   });

//   return strArray.join(' ');
// }

if (!process.env.JEST_WORKER_ID) {
  capitalize(process.argv[2].replace(/(?<!\\)'/g, '"'));
}

module.exports = capitalize;
