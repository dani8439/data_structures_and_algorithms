# Reverse a String

Recommends using the `for of` loop instead of traditional loop. Not always something that works say when you want to do every third character, etc. But for now, not

```
for (const i = 0; i < str.length; i++)
  for (let character of str) {
    reversed = character + reversed;
```

Turn it into an array.

`reduce` is used to take all different values of an array, and condense into one single value. 2 args, arrow function, second is a starting initial value for our function

When `reduce` runs, it's going to take the starting argument, pass it into the arrow function as the first argument, whatever gets returned from that inner function, will be used as starting argument of each successive run of the function. In total function runs one time for every element in the array. First value passed in is our reversed string.

```

     return str.split("").reduce((reversed, character) => {
       return character + reversed;
     }, "");

```
