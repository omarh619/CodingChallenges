/* Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :) */

//P: (n), must be a number, must be psitive integer
//R: return the nearest squared number of n
//E: (1)=> 1
    //(2)=> 1
    //(111)=>121

function nearestSq(n){
    //create a variable that rounds down the square root of n
 let squared = Math.round(Math.sqrt(n))
 // return number * number
 return squared * squared
}
