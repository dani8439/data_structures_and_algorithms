# Reverse Integer

Three helper methods:

1. `toString()` will turn a number into a string

2. `Math.sign` maintains positive or negative, returns `-1 or 1`.

3. `ParseInt()` will turn a string back into a number

```
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  if (n < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}
```

Is a working solution. Check if `n < 0` then we're going to multiply by `-1` in order to maintain the sign. If not, just return the manipulated number.

This is a working solution, but what about `Math.sign`?

What we can do is replace the complicated if statement with different logic:

```
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

```

If `n` is greater than 0, the result will be positive, if `n` is less than 0, the result will be negative.
