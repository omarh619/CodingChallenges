/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

 */

//P: number, square every digit of a number and concatenate
//R: must return a number, not a string 

//E:9112 => 81114
// 0002 => 0004
// 999 => 818181

// convert to a string to split
function squareEachDigit(number){
    let splitNums = number.toString().split('');
    console.log(splitNums)
    let squareDigits = splitNums.map(n=>parseInt(n)).map(num=>num*num).join('')
    return parseInt(squareDigits)
}

// need to square each num then convert back from string to number using parseInt() and join string
// return the number using parseInt again
