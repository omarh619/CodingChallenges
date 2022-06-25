/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers. */

//P: array of numbers, if its not a number or a string of numbers return undefined
//R: return the odd numbers of array cubed and the the sum of odd numbers. or else return undefined if not a number
//E: [1,2,3]=>28
    //[-3,2,3]=>0
    //[z,2,3,5]=> undefined


function cubeOdd(arr) {
    //filter odd numbers and cube them 
    // find the sum of cubed odd numbers
    let cubedArr = arr.filter(num=>num%2 !== 0).reduce((acc,curr)=>acc + Math.pow(curr,3),0)
     console.log(cubedArr)
     //write conditional if array is not a number
     if(isNaN(cubedArr)){
       return undefined
       //return new cubed array
     }else{
       return cubedArr
     }
     
   }