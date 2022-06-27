/* Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well. */

//P: (str), take a string array and turn into a number array
//R: return  number array
//E: (['1','2','3'])=> [1,2,3]
//   (['10020393948'])=> [10020393948]
//  (['0', ' ', '1']) => [0,0,1]

function stringToNumArray(str){
// create a variable that takes in a string array and outpurs a number array
let numArray = str.map(Number)
// use map to create a new array
console.log(numArray)
// return new array
return numArray
}