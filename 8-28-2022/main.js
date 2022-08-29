/* Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

Example
arrayLowerCase(['Red', 'Green']) == ['red', 'green']
arrayLowerCase([1, 'Green']) == [1, 'green']
 */

//P: (arr), lowercase all strings from array, non string items remain the same
//R: return all strings from array in lower case
//E:['Red', 'Green']) ==> ['red', 'green']
    //[1, 'Green']) ==> [1, 'green']
    //[1,2]=> [1,2]

    function arrayLowerCase(arr) {
        // return array of strings in lowercase
        // use map to lowercase the strings
        return arr.map(x=> typeof x === 'string' ? x.toLowerCase() : x)
      }