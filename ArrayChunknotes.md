# Array Chunk

Challenge is to create arrays of certain size with the amount of elements specified as to what's passed in.

One possible solution (There are 2):

Difficulty between 2 in putting them together, in the second solution, more challenging to arrive at by yourself. When you know the trick, it gets easy, when you don't it gets hard.

1. Create empty array to hold chunks called "chunked"
2. For each element in the "unchunked array"

- Retrieve the last element in "chunked"
- If last element does not exist or if its length is equal to chunk size
  -- Push a new chunk into "chunked" with the current element
- **ELSE** add the current element into the chunk
