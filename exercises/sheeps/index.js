//write a function called countSheeps that accepts an array, arrayOfSheep, as an argument.
//You are given an array containing boolean values.
//The goal of the function is to return how many sheep are present.
//If the value is true that means the sheep is present.
//let array = [true,  true,  true,  false,
//          true,  true,  true,  true ,
//         true,  false, true,  false,
//          true,  false, false, true ,
//       true,  true,  true,  true ,
//          false, false, true,  true ];
// dcountSheeps(array1); // output: 17

let arrayOfSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

presentSheeps = (arrayOfSheep) => {
  let present = arrayOfSheep.filter((sheep) => sheep);
  return present.length;
};
presentSheeps(arrayOfSheep);
