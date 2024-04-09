// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//********* FIRST SOLUTION WITH FOR **********/

function capitalize(str) {
  //SPLIT the sentence into an array of words(so we can manipulate each word individually)
  //añadir un espacio vacio en split para que divida el array por palabras
  let words = str.split(" "); //["a", "lazy", "fox"]
  //iterate over each word.
  //substring() returns the part or the string from the start index up to
  for (let i = 0; i < words.length; i++) {
    console.log((words[i] = words[i][0].toUpperCase() + words[i].slice(1)));
  }
  return words.join(" ");
}

//SECOND SOLUTION WITH FOR OF
function capitalize(str) {
  let words = str.split(" ");
  let str2 = [];

  for (let word of words) {
    str2.push(word[0].toUpperCase() + word.slice(1));
  }
  return str2.join(" ");
}

//THIRD SOLUTION WITH .MAP
// function capitalize(str) {
//   let words = str.split(" ");

//   //console.log(
//   words
//     .map((elem) => {
//       return elem[0].toUpperCase() + elem.substring(1);
//     })
//     .join(" ");
//   // );
//   return words;
// }

//ONLY FIRST LETTER
// function capitalizeFirstLetter(str) {
//   const str1 = str.slice(1);
//   //We can access a letter from a string in the same way we access an element from an array
//   //Gettin the first letter from the string

//   const str2 = str[0].toUpperCase();

//   return str2.concat(str1);
// }

module.exports = capitalize;
