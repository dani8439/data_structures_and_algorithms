// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    // iterate through the words, (split array on spaces), capitalize the first character, and then add it to the slice of the rest of the word. Then push that onto our empty words array.
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  // after iterating through all of our words and capitalizing, and rejoin together with the space into a sentence.
  return words.join(" ");
}

module.exports = capitalize;
