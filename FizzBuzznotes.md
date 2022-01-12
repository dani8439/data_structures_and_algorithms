# FizzBuzz

Moderately challenging when you first see it. Not until you see the trick that it becomes easier to handle.

We have our fizzbuzz function, when we call it with some whole number (positive), we need to print out all the numbers (console.log) of 1 to n. However, for any number that's a multiple of 3, print out fizz. If it's a multiple of 5, print out buzz, if it's a multiple of both 3 and 5, print out fizzbuzz.

Challenge is determining when the number is a multipe of 3 and 5.

How to calculate a multiple of a given number. Use a very specific operator. The modulo operator `%`. Can determine the remainder of a number during division.

```
9 % 3
// 0

10 % 3
// 1

11 % 3
// 2

12 % 3
// 0

11 % 3 === 0
False
```

Have to use a for loop for this. Manually. Can't get around this. Has to start at 1. Specifically says we have to loop from 1 to n.

recs that you write out comments to guide you in an interview setting.

```
function fizzBuzz(n) {
  for (let num = 1; num <= n; num++) {
    // is the number a multiple of 3 and 5?
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("fizzbuzz");
      // is the number a multiple of 3?
    } else if (num % 3 === 0) {
      console.log("fizz");
      // is the number a multiple of 5?
    } else if (num % 5 === 0) {
      console.log("buzz");
      // console.log numbers that are not multiples of either
    } else {
      console.log(num);
    }
  }
}
```

Not good to put fancy logic into something like this, and turning it into a one liner. Not necessary on something like this. Better for this to be straightforward and simple. Leave it in longform. Don't condense it down.
