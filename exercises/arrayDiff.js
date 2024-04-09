function arrayDiff(a, b) {
  // Temporary array, containing all values from a, which are not contained in b
  let diffArray = [];
  // Looping over a
  for (let i = 0; i < a.length; i++) {
    // Per default we say that b does not contain a
    let bContainsAValue = false;
    // Loop over b
    for (let y = 0; y < b.length; y++) {
      // If any value in b is the same as the current value from a, we set bContainsAValue to true
      if (a[i] === b[y]) bContainsAValue = true;
    }
    // Now only if bContainsAValue is still false, meaning it does not contain the a value, we push this value into our temporary array
    if (!bContainsAValue) diffArray.push(a[i]);
  }
  // In the end we return the temporary array
  return diffArray;
}
arrayDiff([1, 2, 2, 2, 3], [2]);

//******2********
//WITH ARRAY METHODS
function arrayDiff(a, b) {
  // Filter entire a array, only keep the value if b does not contain that value
  console.log(a.filter((val) => !b.includes(val)));
}
arrayDiff([1, 2, 2, 2, 3], [2]);
