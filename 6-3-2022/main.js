/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

//P: str, create variables for position and removal
//R: return the middle char of string, if odd return 1 character, 2 if even
    function getMiddle(str){
    //create variables 
    let start;
    let extract;
    // conditional for odd/even string
    if(str.length % 2 === 1){
        start = str.length/2;
        extract = 1;
    }else{
        start = str.length/2 - 1;
        extract = 2
    }
    return str.substring(start, start + extract)


    //length of string divided by 2 for odd str, return 1 char

    //for even its divided by 2 - 1,, return 2 char
    }



//E: 
getMiddle('test')//return 'es'
getMiddle('right')// 'g'
getMiddle('middle')//'d'