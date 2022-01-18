# Capitalization

Seems easy at first glance, but needs a little practice. Capitalize the first letter of each word in the sentence.

First solution is concise. Few lines of code, easy to read, but requires a lot of knowledge of JS library.

Second solution, easy to read about, includes a nasty for loop, kind of hard to tell what's going on with it just looking at the code.

Few pointers/tips:

`str.slice()` can be used on a string, will take some number of elements out of that string. First arg is the index to start from, optional second arg for end index. If not included, rest of string is automatically included.

```
const word = "there";

word.slice(1) // here
word[0] // t
word[0].toUpperCase() // T
```

## Solution 1:

Pseudo-Code:

1. Make an empty array 'words'
2. split the input string by spaces to get an array
3. For each word in the array:

- Uppercase the first letter of the word
- Join first letter with the rest of the string
- Push the result into 'words' array

4. Join 'words' into a string and return it.
