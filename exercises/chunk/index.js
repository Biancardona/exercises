// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//Create empty array to hold chucks called chunked
//For each element in the "unchunked" array
//Retrieve the las element in "chunked"
//If last element does not exist, oi its length is equal to chunk size
//Push a new chunk to "chunked"with the current element
//Else add the current element into the chunk

const chunk1 = (array, size) => {
  let chuncked = [];

  for (let i of array) {
    //tiene que empezar de atras para adelante para que recorra todo el array
    //Keep reference to the last chunk and check its size as we loop through the array items
    const last = chuncked[chuncked.length - 1];

    if (!last || last.length === size) {
      chuncked.push([i]);
    } else {
      last.push(i);
    }
  }
  return chuncked;
};
chunk1([2, 2, 3, 4], 4);

//create empty "chuncked" array
//create "index" start at 0
//While index is less than array.length
//push a slice of length "size" from "array" into chunked
//Add "size" to "index"

const chunk = (array, size) => {
  let chuncked = [];
  let index = 0;

  //array.slice produces a new array that contains some number
  // of elements out of the original array
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chuncked;
};
chunk([2, 2, 3, 4], 4);

module.exports = chunk;
