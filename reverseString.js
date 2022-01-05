// Reverse a String

// Solution 1
function reverseString(str) {
  // Split the string up into an array of characters
  const split = str.split("");
  // call the Array method of reverse on the array, then rejoin the split array back into a string. Return it from the function
  return split.reverse().join("");
}

// Solution 2
