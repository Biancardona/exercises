// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Handle the negative sign: if N is greater than zero, then we want to just leave everything as it.
//Split method divides a String into an ordered list of substrings
//If N is less than zero, then we want to multiply the result of this negative one to turn it into a negative number

function reverseInt(n) {
  const x = n.toString().split("").reverse().join("");
  if (n < 0) {
    return parseInt(x) * -1;
  }
  return parseInt(x); //* Math.sign(n);
}

//change number to String .toString()
//Math.abs(n) Get the absolute value of our number  > 100
//Math.sign() If we pass a negative number, it will return -1
//If we pass a positive number it will return 1

//2.-
function reverseInt(n) {
  const x = Math.abs(n).toString().split("").reverse().join("");
  console.log(x);
  const sign = Math.sign(n);
  return sign * x;
}

module.exports = reverseInt;

//Turn to number again : parseInt(myNumber.toString())
