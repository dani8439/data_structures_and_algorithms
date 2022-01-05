# Palindromes

Anothor array helper. `Array.prototype.every()`

Does a boolean check on every element in an array. Ex is every value greater than 5?

`array.every((val) => val > 5);`

Does do more comparisons than necessary as it iterates through the entire array. Double comparison taking an array of a b c b a. it compares a to a, b to b, c to c, then does the second half and compares b to b, and a to a. etc. Double comparison.

Not an ideal solution for this problem. Essentially twice as much work as we have to do. But it's so you can explain to your interviewer what he just said. It's too much work. Twice as much work as we need to do. If you can think of multiple solutions to a problem, highly recommend give them. In your interest to be aware of all the ways of doing it.
