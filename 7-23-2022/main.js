/* Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]

 */

//P: (arr), array cant be empty, only non negative numbers and single digits allowed if not return null
//R: return an array that has 1 added to the value 
//E: [4,3,2]=> [4,3,3]
    //[1,-9]=> null
    //[22,23]=> null

    function upArray(arr) {

        // return null conditionals
        if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
            return null;
        }
        //loop through array
        for (var i = 0; i < arr.length; i++) {
            if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
                return null;
            }
        }
        // if its 9 and more than one digit we have to check all previous digits
        // whether they are also a 9
        for (var j = arr.length - 1; j > -1; j--) {
    
            if (arr[j] !== 9) {
                arr[j] = arr[j] + 1;
                break;
            } else {
                arr[j] = 0;
            }
    
            if (j === 0) {
                arr.unshift(1);
            }
        }
    
    
        return arr;
    }