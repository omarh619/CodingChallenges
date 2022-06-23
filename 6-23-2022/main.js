/* Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6] */

//P: array, number, array can have negative numbers, wont have empty arrays.
//R: return a new array of even numbers with the length of the number parameter

//E: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
//([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
//P: reverse string and filter the even numbers on new array
//grab the number of even numbers needed then reverse the array backk to normal
//return new array
function evenNumbers(array, number){
    const revAndFilter = array.reverse().filter(num=> num%2===0);

    const result = revAndFilter.splice(0,number).reverse();
    return result
}