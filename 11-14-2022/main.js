 /* you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1. */

// arr - only nums, always three nums, no empty arrays

// return the index of element

//gimme([2, 3, 1]) => 0
//gimme([5, 10, 14]) => 1

function gimme(arr){
    //always 3 nums
    //return the index of element
    //sort and grab index[1]
    //arr - indexOf num 
    return arr.indexOf([...arr].sort((a,b)=> a - b, 0)[1])
    
  }
  console.log(gimme([2, 3, 1]),0)
  console.log(gimme([5, 10, 14]),1)