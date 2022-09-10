/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

//P: (array), array will always be integers, only non empty arrays, multiply the values and retrun result
//R: return the result of multiplying the values together in order
//E: [1, 2, 3, 4] =>  24
// [2,3]=>6
//[5,6,7,8]=> 1680

function resultOfArray(arr){
    // multiply every integer and get the result
    // use reduce method
    return arr.reduce((a,b)=> a*b)
}