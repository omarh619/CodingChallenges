/* You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

//P: (array), must be numbers, sort the odd numbers only in ascending order while leaving the even numbers alone
//R: return an array with the odd numbers sorted only
//E:
/* [7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortOddsInArray(array){
    // creat an empty array
    const odds = [];
    // loop through array and grab all odd numbers
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 !=0){
            odds.push(array[i])
        }
    }
    // sort the odd numbers in ascending order
    let finalArray = odds.sort((a,b)=> a-b);
    // loop through whole array again while plugging in the odd numbers in ascending orders using splice
    for (let j = 0; j < array.length; j++){
        if(array[j]%2 === 0){
            finalArray.splice(j,0, array[j])
        }
    }
    return finalArray
}