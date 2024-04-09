//Write a function that,
//given a string of text
//(possibly with punctuation and line-breaks),
//returns an array of the top-3 most occurring words,
//in descending order of the number of occurrences.

const findMostRepeatedWord = (str) => {
  let wordsArray = str.match(/\w+/g);
  console.log(wordsArray); // [ 'How', 'do', 'you', 'do' ]

  let occurances = {};
  //convert object, for word of wordArray
  for (let word of wordsArray) {
    //if appears word in occurranes(object empty) add the word
    if (occurances[word]) {
      occurances[word]++;
      //else, if not appears, leave that word as 1
    } else {
      occurances[word] = 1;
    }
  }

  console.log(occurances); // { How: 1, do: 2, you: 1 }

  let max = 0;
  let mostRepeatedWord = "";

  for (let word of wordsArray) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }
  //returning the string of the most repeated word
  console.log(mostRepeatedWord);
};
findMostRepeatedWord("How do you do?");

//TOP THREE MOST REPEATED WORD
º   
const threeMostRepeatedWord = (str) => {
  let words = str.match(/\w+/g);
  console.log(words); // ["a", "a", "a", "b", "c", "c", "d", "d", "d", "d", …]

  let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }

  console.log(occurances); // {a: 3, b: 1, c: 2, d: 4, e: 5}
  // converting the object to an array.

  let keys = Array.from(Object.keys(occurances), (key) => [
    key,
    occurances[key],
  ]);
  console.log(keys); //each array

  keys.sort((a, b) => b[1] - a[1]);

  return [keys[0][0], keys[1][0], keys[2][0]]; //["e", "d", "a"]
};

threeMostRepeatedWord("a a a  b  c c  d d d d  e e e e e");
