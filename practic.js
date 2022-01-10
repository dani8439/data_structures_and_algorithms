function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseString2(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverseString3(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

function palindrome2(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

function reverseInt2(n) {
  const reversed = n.toString().split("").reverse().join("");

  if (n < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
