// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // need to keep in mind edge case, and compare both character maps. Going to pull out all the keys and count them and compare for both.
  // If the keys are wrong number, obviously not a match and immediately return false
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    // if char doesn't equal in both, something must be wrong
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  // in case we escape both succesfully, it must be true
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  // clean up logic in for loop.
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    // charMap + 1, in the case there is none, set it to 1
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
