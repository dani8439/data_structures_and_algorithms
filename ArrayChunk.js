// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    // to get the last element of the chunked array, make a temporary variable
    const last = chunked[chunked.length - 1];

    // check to see if the last element does not exist, or if the length is equal to chunk size. If if is, we want to push a new chunk into chunked with the element we are iterating over
    if (!last || last.length === size) {
      // push in a new chunk and element at the same time
      chunked.push([element]);
    } else {
      // if chunk exists but isn't full yet, push in elements
      last.push(element);
    }
  }
  return chunked;
}

module.exports = chunk;

// Solution 2
function chunk2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    // slice statement that will take slice out of original array. This is the hard part right here, of index + size. Then once that's taken, push it all into the chunked array.
    chunked.push(array.slice(index, index + size));
    // not incrementing by 1, but by the size variable (as that's what we've taken out of the original array)
    index += size;
  }
  return chunked;
}
