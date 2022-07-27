/* Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

 */

//P: (numbers), list of numbers only , no duplicates
//R: return a list that the values increment by 1  up to the maximum  value
//E: 1,3,5,7 => 1,2,3,4,5,6,7
    //1,3,5,6,7,8 => 1,2,3,4,5,6,7,8
    //1,4,9 => 1,2,3,4,5,6,7,8,9

    function pipeFix(numbers){
        // create a variable to hold new array
        let newArr = [];
        // loop through the first num to last num in array
        for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
            // push i to new array
          newArr.push(i)
        }
        //return array
        return newArr
      
      }