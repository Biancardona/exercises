// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
}

//2
function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
    //a , pa, ppa, lppa, elppa
  }
  return reversed;
}

//3
function reverse(str) {
  // Step 1. Use the split() method to return a new array
  // Step 2. Use the reverse() method to reverse the new created array
  // Step 3. Use the join() method to join all elements of the array into a string

  let splitString = str.split("").reverse().join("");
  return splitString;
}

module.exports = reverse;
