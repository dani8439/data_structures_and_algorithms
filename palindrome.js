// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My solution
function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  if (str === reversed) return true;
  else return false;
}

// His easy solution:

function palindrome1(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

// The harder solution:

function palindrome(str) {
  return str.split("").every((char, i) => {
    // to get the mirror index.
    return char === str[str.length - i - 1];
  });
}

// Anothor array helper. Array.prototype.every()
// Does a boolean check on every element in an array. Ex is every value greater than 5?
// array.every((val) => val > 5);
// Does do more comparisons than necessary as it iterates through the entire array. Double comparison taking an array of a b c b a. it compares a to a, b to b, c to c, then does the second half and compares b to b, and a to a. etc. Double comparison.
//   Not an ideal solution for this problem. Essentially twice as much work as we have to do. But it's so you can explain to your interviewer what he just said. It's too much work. Twice as much work as we need to do. If you can think of multiple solutions to a problem, highly recommend give them. In your interest to be aware of all the ways of doing it.
