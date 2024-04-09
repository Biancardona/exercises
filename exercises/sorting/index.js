// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

//Write an algorithm that takes an array and moves all of the zeros to the end,
//preserving the order of the other elements
// returns[false,1,1,2,1,3,"a",0,0]

//moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

//Run a for loop
//In each iteration take the element at current index
//array.splice returns an array containing all of the removed elements, in this case [0].
//We only want to push 0 to the end of the array, so we take the firs element of that array.
//If you dont add the [0], you will get [1, 2, 3, 4, 5, [0]]
//After the iteration is complete, use the JavaScript splice()
// method to remove first X elements from the array to get the resultant array.

//*************  1  ************/
moveZeros = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.push(arr.splice(arr.indexOf(0), 1)[0]);
    }

    console.log(arr);
  }
};
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

//*************  2  ************/
const moveZeros = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(arr.indexOf(0), 1);
      arr.push(0);
    }
  }
  console.log(arr);
};
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
