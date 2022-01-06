# Max Characters

Common variations on this question:

- What's the most common character in the string?

- Does string A have same amount of characters as string B? (is it an anagram?)

- Does the given string have any repeated characters?

Can use a character map to solve a wide variety of questions:

`Hello There!"

```
{
    H : 1,
    e : 3,
    l : 2,
    o : 1,
    " " : 1,
    T : 1,
    h : 1,
    r : 1,
    ! : 1
}
```

Finds the character map, but then we need to iterate through it:

```
function maxChar(str) {
    const charMap = {};

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    console.log(charMap)
}
```

He also wrote it as:

```
const string = "Hello There!"
const chars = {};

for (let char of string) {
    if (!chars[char]) {
        chars[char] = 1;
    } else {
        chars[char]++;
    }
}
```

Which can be rewritten as:

```
for (let char of string) {
    chars[char] = chars[char] + 1 || 1;
}
```

Create two helper variables at top of function `let max = 0;` and `let maxChar = '';`. Going to iterate through the character map. If we ever find a character that has more uses than max, then we'll set `max` equal to that new value, and set `maxChar` to the value responsible for more uses.

for/of is used for a iterating through an array or string. (any type of iterable). In this case, we're iterating through an actual object. To iterate through an object, instead use `for/in` loop

Object starts with `o` and ironically did not choose o for of, so for/in
