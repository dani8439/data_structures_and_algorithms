// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverseString(str) {
  // Split the string up into an array of characters
  const split = str.split("");
  // call the Array method of reverse on the array, then rejoin the split array back into a string. Return it from the function
  return split.reverse().join("");
  // Could also do
  //   return str.split("").reverse().join("");
}

// Solution 2

function reverseString2(str) {
  let reversed = "";

  // recommends using the for of loop instead of traditional loop. Not always something that works say when you want to do every third character, etc. But for now, not for (const i = 0; i < str.length; i++)
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// The WOW you know what you're doing and want to impress interviewer answer

function reverseString3(str) {
  // turn it into an array.
  // reduce is used to take all different values of an array, and condense into one single value. 2 args, arrow function, second is a starting initial value for our function

  // When reduce runs, it's going to take the starting argument, pass it into the arrow function as the first argument, whatever gets returned from that inner function, will be used as starting argument of each successive run of the function. In total function runs one time for every element in the array. First value passed in is our reversed string.

  //   return str.split("").reduce((reversed, character) => {
  //     return character + reversed;
  //   }, "");

  // can simplify syntax
  return str.split("").reduce((rev, char) => char + rev, "");
}
