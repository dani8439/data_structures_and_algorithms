# Anagrams

## What are Anagrams?

An anagram is where we take one string, and generate another string out of it that has the same number and quantity of characters.

'rails safety' and 'fairy tales' are anagrams of each other.
'hi there' and 'bye there' are not.

In this, only want to consider characters, or punctuation. Consider capital letters exactly the same as lowercase letters.

Some tips for dealing with these edge cases around characters.

`RegExp`. Regexes. Regular expressions can be used to manipulate strings very easily. Can use a regex to remove excess punctuation and spaces.

`\w [A-Za-z0-9_]` helps you match only characters. Ignores any type of space or punctuation, or symbol. (Chart on MDN) `word.replace(/[^\w]/g, )`

```
const word = "HI THERE!!!!"

// to replace any characters
word.replace(/[^\w]/g, "").toLowerCase();

// hithere
```

To only work with lowercase characters, is to chain on the method `.toLowerCase()`;

Way to solve any kind of comparisons of strings, is to generate character maps. One way is to generate a character map out of both strings given.

Could iterate over both character maps to check.

One last gotcha around character maps. Need to iterate through both? Compare both to each other. But there is an easier way to do that, a shortcut rather than doing a comparison one way and then doing back to each other. Can instead, count the number of keys present in one object, and compare it to the other.

Another way would be to count length of characters in each string and compare.

# Solution

Want to create a helper function so don't have to character map both.

To pull out keys:

```
const obj = {
    a: 1,
    b: 1,
    c: 1
};

Object.keys(obj);
// ["a", "b", "c"]
Object.keys(obj).length;
// 3
```

## Second Solution

A little more straightforward. Depends on knowing a trick.

```
const numbers = [10, 30, 5, -90, 1000]

numbers.sort();
```

sort will try to meaningfully sort the array.

If we sort characters, we end up with alphabetical order.

Going to take our two inputs, clean them up, by removing any spaces or punctuation, lowercase them, then going to sort both strings. Will end up in exact same order. If they are exactly identical, we have an anagram. No need to loop, can sort both strings, compare the two and say we're done.

Again going to make a helper function to clean up both strings

```
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}
```
