// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

module.exports = steps;

// Recursive Solution:

// first time we call steps, have n of 4, 5, 6, row is 0, stair is empty string.
function steps(n, row = 0, stair = "") {
  // want to pass along current row, so adding row as argument. Default as 0, top row of our problem
  // pass in default of stair as well, with an empty string
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // ternary oprator logic instead/condensed:
  // const add = stair.length <= row ? '#' : ' ';
  // steps(n, row, stair + add);
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  // call steps again until we've gone through all the rows and we satisfy other logic.
  steps(n, row, stair);
}
