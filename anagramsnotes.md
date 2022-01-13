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
