/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */

//P: (str) split the string into pairs, if string is odd number of characters replace with '_', string of letters only
//R: return string into pairs or with '_' if string is odd
//E:
    /* 'abc' =>  ['ab', 'c_']
       'abcdef' => ['ab', 'cd', 'ef'] */

       function strInPairs(str){
        //create an empty array
        let arr = []
        //loop str in 2s
        for (let i = 0; i < str.length; i+= 2){
            arr.push(`${str[i] + (str[i + 1] || '_')}`)
        }
        // push into array in 2s or else add '_'
        //return array
        return arr
       }