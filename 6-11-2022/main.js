/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

//P:numbers, its an array with positive numbers only
//R: return the sum of the two lowest positive numbers
function sumTwoSmallestNumbers(numbers){
    // sort the array from lowest to highest
    let sortedNums = numbers.sort((a,b)=> a-b);
    //grab the first two and add them
    return sortedNums[0] + sortedNums[1]
    //return the results 
}



//E:
sumTwoSmallestNumbers([10,9,8,4])// return 12
sumTwoSmallestNumbers([1,2,3,4,5,])// 3
sumTwoSmallestNumbers([23323,34434,434,545,55,33])// 88

