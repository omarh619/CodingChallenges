/* Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74
 */

//P: (arr), find the minimum sum which is obtained from summing 2 integers multiplied, positive nums only and arrays will always be even
//R: return the lowest possible sum from the product of the arr list
//E: [5,4,2,3] => 22
    //({12,6,10,26,3,24}) ==> return (342)
    //({9,2,8,7,5,4,0,6}) ==> return (74)

    function minSum(arr){
        //sort the array
        let sorted = arr.sort((a,b)=> a - b).slice(0,arr.length/2)
        //slice the array in half to get the lowest nums possible
        console.log(sorted)
        // find the sum of arr using reduce
        let sumOfResults = sorted.reduce((acc, curr, i)=> acc += curr * arr[arr.length - i -1], 0)
        // return results
        return sumOfResults
    }