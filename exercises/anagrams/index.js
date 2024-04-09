// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  let words = stringA.replace(/[^\w]/g, "").toLowerCase();
  let wordsB = stringB.replace(/[^\w]/g, "").toLowerCase();

  let occurances = {};
  let occurancesB = {};
  for (let i of words) {
    if (occurances[i]) {
      occurances[i]++;
    } else {
      occurances[i] = 1;
    }
  }
  for (let i of wordsB) {
    if (occurancesB[i]) {
      occurancesB[i]++;
    } else {
      occurancesB[i] = 1;
    }
  }

  console.log(occurances, occurancesB);
};

anagrams("rail safety", "fairy tales");

module.exports = anagrams;

//*************SECOND SOLUTION *************/
function anagrams(stringA, stringB) {
  const anagA = retieveInfo(stringA);
  const anagB = retieveInfo(stringB);

  console.log(anagA);
  console.log(anagB);

  console.log(
    Object.keys(anagA).every(
      (val) => anagB.hasOwnProperty(val) && anagA[val] === anagB[val]
    )
  );
}
anagrams("hello", "llohe");
//Hacer una funcion generica que tome como
//parametro un objeto que se le pasara
function retieveInfo(string) {
  let newObj = {};
  let strings = string.replace(/[^\w]/g, "").toLowerCase();
  for (const elem of strings) {
    if (newObj[elem]) {
      newObj[elem]++;
    } else {
      newObj[elem] = 1;
    }
  }
  return newObj;
}

//***THIRD SOLUTION*** (Part of it)

//Primero comparar que tengan el mismo length de keys
//Si no tienen el mismo numero no es un anagrama, si si, todavia
//Hay que comparar los values
if (Object.keys(anagA).length !== Object.keys(anagB).length) {
  return false;
}
for (let elem of anagA) {
  if (anagA[elem] !== anagB[elem]) {
    console.log(false);
  }
}
console.log(true);
//Luego comparar que tengan el mismo valor
//ITerate over one anagA, look at every character inside of it and
//compare it to the other anagB
//Use for in

//***CUARTA SOLUCION  */
function anagrams(stringA, stringB) {
  let resultA = convert(stringA);
  let resultB = convert(stringB);
  if (resultA !== resultB) {
    return false;
  }
  return true;
}
anagrams("hello", "llohe");
//helper function
function convert(str) {
  let words = str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();

  return words;
}
