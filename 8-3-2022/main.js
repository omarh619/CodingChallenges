/* Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

 */

//P: (a,b), string nums, output the sum, empty strings should return 0
//R: return the sum of string numbers
//E: 
/* "4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0" */

function sumOfStr(a,b){
    // make string nums into numbers
    a = Number(a);
    b = Number(b);
    console.log(b)
    //get sum of numbers 
    let results = (a || 0) + (b || 0)
    console.log(results)
    //return results in string form
    return results.toString()
}
sumOfStr('4','2')
