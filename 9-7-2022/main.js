/* get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

//P: (arr1, arr2), 2 arrays of numbers, numbers only, find the sum of all elements
//R: return the sum of all elements in 2 arrays
//E: ([1,2],[3,4])=> 10
    //[0],[1,2,3]=> 6
    //[10,11,12]=>[13,14,15]=> 75

    function arrayPlusArray(arr1, arr2) {
        // variable to find sum of each array
        // use reduce method to get sum of the array
        let arrRes = arr1.reduce((a,b)=>a+b,0)
        console.log(arrRes)
        let arrRes2 = arr2.reduce((a,b)=>a+b,0)
        // return the results of first array + plus sum of second array
        return arrRes + arrRes2; //something went wrong
      }
