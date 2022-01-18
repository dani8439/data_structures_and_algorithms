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
