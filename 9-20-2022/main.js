/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits  */

//P:(triplet) always an array of 3 different numbers, return the index of the middle number
//R: return the index of the middle number
//E: ([2, 3, 1]) => 0

function gimme (triplet) {
    //create empty array
    let ogArr = [];
    // push original array into empty array
      ogArr.push(triplet[0],triplet[1],triplet[2]);
      // sort through each number from least to greatest and return the middle number of the original array
      let sortedArr = triplet.sort((a,b)=> a-b)
      return ogArr.indexOf(sortedArr[1])
    }
    