// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //The every() method tests whether all elements in the array pass the test implemented by the provided function.
  // It returns a Boolean value.
  return str.split("").every((elem, i) => {
    return elem === str[str.length - i - 1]; //The last element of the array -1 (par ano salirse del array)y el i es para ver los valores
  });
}

//PALINDROME.2
function palindrome(str) {
  let reversedString = str.split("").reverse().join("");

  return reversedString === str; //returns a boolean if is true, or if else, returns false
  //Don't need to use the if comparator because there only one comparation, if its correct returns TRUE b default
}

//PALINDROME. 3

let str = "Abba";
function palindrome(str) {
  let lowerCaseString = str.toLowerCase();

  let reversedString = lowerCaseString.split("").reverse().join("");
  console.log(reversedString);

  if (reversedString === lowerCaseString) {
    return true;
  } else {
    return false;
  }
}
palindrome(str);

//

module.exports = palindrome;
