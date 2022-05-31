/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

//P: x, map a new string
//R: return new string of 0s and 1s
    //seperate string 
    // return new string that replaces nums with 0s and 1s
    //join string and return
    function zerosAndOnes(x){
        return x.split('').map(num => num < 5 ? 0 : 1).join('')
    }



//E:
zerosAndOnes('233322677')// returns 000000111
zerosAndOnes('564')//110
zerosAndOnes('5555')//1111