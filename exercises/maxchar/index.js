// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//Iterate through the string and for every character add that character to a new object
//Converted str the obj(the object keys are going to be the letters from the string)
//Walk through the object
//Find the property that has the highest number assigned to it

function maxChar(str) {
  let maxValue = "";
  let max = 0;
  let charMap = {};
  for (let chars of str) {
    //for every chars receive, we will add an entry to charMAp
    //chars[chars] --> this will return a reference to that particular character.
    //If we've already seen that character before, we will add one to it.
    if (charMap[chars]) {
      charMap[chars]++;

      // we will add the character as a property and assign it a value of one.
    } else {
      charMap[chars] = 1;
    }
  }
  //for in to iterate Objects
  //for each character [key are not the values, are the characters] in charMap
  for (const chars in charMap) {
    if (charMap[chars] > max) {
      max = charMap[chars];
      maxValue = chars;
    }
  }
  return maxValue;
}
module.exports = maxChar;

//************ SEGUNDA SOLUCION /
//Convertir a array para poder iterar en el objeto, luego
function maxChar(str) {
  const newObj = {};

  for (const elem of str) {
    //for every character in str we are going to add a property to newObj
    //1 if doesn't exist
    //En un inicio marca UNDEFIND porque se esta asignando un uevo valor que no concoce
    if (!newObj[elem]) {
      //Asignandole valor al array
      newObj[elem] = 1;
    } else {
      newObj[elem]++;
    }
  }

  let arr = Object.values(newObj);

  let max = Math.max(...arr);
  console.log(max);
}
maxChar("abcccccccd");
