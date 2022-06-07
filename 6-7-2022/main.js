/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

//P: str, counts how many vowels used in string, all letters wil be in lower case
//R: return number of vowels used in string
    //make variable for all vowels
    function countVowels(str){
        let vowels = ['a','e','i','o','u'];
    //split the string
    //filter out the vowels in string
    return str.split('').filter(x=> vowels.includes(x)).length

    //return the string
    }



//E:
countVowels('hello')//returns 2
countVowels('gael')// 2
countVowels('oliver')//3