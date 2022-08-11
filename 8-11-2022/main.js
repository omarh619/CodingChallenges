/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

//P: (n) must be number, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
//R: return the sum of digits in a number
//E:
/* 16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6 */

function digitalRoot(n){
    //conditional if num lower than ten return it
    if(n < 10){
        return n
    }
    // create variable to hold sum
    let sum = 0;
    // turn n to string
    n = n.toString()
    // loop through numbers and += sum
    for(let i = 0; i < n.length; i++){
        // make n a number again
        sum += Number(n[i])
    }
    //if sum still 2 digits redo the function call
    return digitalRoot(sum)
}