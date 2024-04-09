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
/************SOLUTION 1**********/
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    //column is the same size as the row
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    //.join, with an empty string("") so all element are joined without any character in between them
    console.log(stair);
  }
}

//********SOLUTION 2*********/
function steps2(n) {
  let step = Array(n).fill(" ");
  for (let i = 0; i < step.length; i++) {
    step[i] = "#";
    //.join, with an empty string("") so all element are joined without any character in between them
    console.log(step.join(""));
  }
}

module.exports = steps;
