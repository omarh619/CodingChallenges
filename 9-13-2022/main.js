/* Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10] */

//P: (n,x) => positive integers only, return in an array 
//R: Create a function with two arguments that will return an array of the first n multiples of x
//E: (1,10) === [1,2,3,4,5,6,7,8,9,10]
// (2,5) === [2,4,6,8,10]
// (1,2) === [1,2] 

function countBy(n,x){
    //create an empty array
    let result = [];
    //loop numbers all the way to x
    for (let i = 1; i <= x; i++){
        result.push(n * i);
    }
    return result
}