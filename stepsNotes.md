# Steps

This problem is very closely to the one after. 2 questions in a row that are extremely closely related. First version is the easier version, second one is much more challenging. Like the warm up and then the challenge. Both very useful.

Function should take a positive number N. Console log a step shape with n levels using the `#` character.

Supopsed to form a visual staircase. Number, is the number of lines we want to log. 2, 2 lines of steps, 3, 3 lines etc. Otherthing that's extremely important, if we have 1 step chcaracter and 2 total, then 1 space next to it, 2 2 spaces, etc. Number of characters in each line must always be equal. Want to see correct number of empty spaces to the right of the pound.

Making multiple console logs.
Think that the recursion solution (second) is a little easier, but requires you to use recursion skills. Iterative solution first.

## Solution 1

1. From 0 to n (iterate through rows)

- Create an empty string 'stair'
- From 0 to n (iterate through columns)
  -- **IF** the current column is equal to or less than the current row
  --- Add a '#' to the 'stair'
  -- **ELSE**
  --- Add a space to 'star'
- Console log 'stair'

Kind of dealing with a matrix of sorts, a 2-D array, even though we are working with strings. Think of indeces.

Want to recognize that we're going to have some number of rows we want to iterate through. Row 1, row 2, row 3. Also going to want to iterate through some row of columns, column 1, column 2, column 3 etc.

row = row variable
column = column variable

First write a for loop to iterate through all rows we have.
Then for each row we are considering, we'll create an empty string.

Anytime you work on a kind of grid like this, want to see if you can find a pattern. (r0, c0, r1, c0 in diagram. )

Pattern is when c is greater than r, we get a space. Want a pound (#) if c is less than, or equal to r.

If we don't meet the if statement, than rather than adding a pound, we want to add a space.

Last key, is after running through the for loop, take that stair, and console log it.
Then when we move onto next row/iteration, going to redeclare as an empty string.

Highly recommend to always pseudocode a solution in a white board interview. Explains your process, can find flaws in logic, rather than jumping right into coding.

## Recursive Solution

With recursion, we always start off with some type of function. First thing we always do, is to identify the base case. The base case is when we decide there is no more work to do, and time to stop the recursion process. 0. If number being passed in is equal to 0, we end. Nailing your base case is critical during recursion process. End up in infinite recursive solution if don't think about base case until the end.

After checking to see if we've met the base case, do some amount of work, and call the function again.

Last step, is to call our function again. Extremely critical to change the arguments in some fashion. If we call the function with n, will be stuck in an infinite loop.

```
function printNumber(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  printNumber(n - 1);

}

printNumber(10);
```

Some takeaways we notice about recursion.

**Recursion Tips**

1. Figure out the bare minimum pieces of information to represent your problem.
2. Give reasonable defaults to the bare minimum pieces of info.
3. Check the base case. Is there any work left to do? If not, return.
4. Do some work. Call your function again, making sure the arguments have changed in some fashion.

Now let's take the recursion tips, and apply it to the steps problem.

#### Logic

If (row === n) then we have hit the end of our problem.
If the 'stair' string has a length === n, then we are at the end of a row.
If the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space.

**Note** If possible, try the iterative solution first, and then if you can get that working, move onto recursion if in a job interview. Hard to get into the mindset of recursion right away.

If wanted to, could shorten up the if statement with a ternary operator:
