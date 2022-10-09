/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
 */

// arr - arr of nums only, no strings, no special char, no duplicates, 

function findOutlier(integers){
    //filter out odds and even
    // if ===1 return correct variable
    const odd = integers.filter(item => (item % 2) === 0);
    const even = integers.filter(item => (item % 2) !== 0);
    return odd.length === 1 ? odd[0] : even[0];
  }