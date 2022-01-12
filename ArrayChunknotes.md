# Array Chunk

Challenge is to create arrays of certain size with the amount of elements specified as to what's passed in.

One possible solution (There are 2):

Difficulty between 2 in putting them together, in the second solution, more challenging to arrive at by yourself. When you know the trick, it gets easy, when you don't it gets hard.

**Solution 1**

1. Create empty array to hold chunks called "chunked"
2. For each element in the "unchunked array"

- Retrieve the last element in "chunked"
- If last element does not exist or if its length is equal to chunk size
  -- Push a new chunk into "chunked" with the current element
- **ELSE** add the current element into the chunk

```
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    // to get the last element of the chunked array, make a temp variable
    const last = chunked[chunked.length - 1];
    // check to see if last element does not exist, or if length is equal to chunk size. If it is, we want to push a new chunk into chunked, with the element we are iterating over.

    if (!last || last.length === size) {
      // push in new chunk and element at same time
      chunked.push([element]);
    } else {
      // if chunk exists but isn't full yet
      last.push(element);
    }
  }
  return chunked;
}
```

**Solution 2**
Harder to come at this solution on your own, unless you have this particular funciton in mind. Function is `slice()`

Can pass in a start index and an end index:

```
const letters = ['a', 'b', 'c', 'd', 'e']

letters.slice(0, 3)
// ["a", "b", "c"]
```

Making a copy with `slice()`. taking everything from 0 up to 3. Common mistake is that the second argument is number of el we want to slice out of the array, rather than the index up to but not including that we want to slice to.

With `slice()` method in mind, can think of an alternative approach to the chunk problem.

1. Create empty 'chunked' array
2. Create 'index' starting at 0
3. While index is less than array.length

- Push a slice of length 'size' from 'array' into chunked.
- Add 'size' to 'index'
