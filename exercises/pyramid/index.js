// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  //Calculate what is the very center index of the columns array
  const midPoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let step = ""; //for each row, there's going to be an empty string
    //HOw "n" is related to the number of columns? = Two times "n" -1 is the number of colums
    for (let columns = 0; columns < n * 2 - 1; columns++) {
      //Then take row number of elements on either side
        midpoint -row <= column && 
    }
    console.log(stair);
  }
}

module.exports = pyramid;
