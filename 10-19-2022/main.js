/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1) */

//(arr)- no strings just integers, whole integers only, return average rounding down to nearest integer

//getAverage([2,2,2,2]),2)
//getAverage([1,2,3,4,5,]),3);
//getAverage([1,1,1,1,1,1,1,2]),1) 

function getAverage(arr){
    // grab the sum of all integers
    // divide by arr.length
    // use Math.floor to round down
    return Math.floor(arr.reduce((a,b)=> a+b, 0) / arr.length)
    
  }
  
  console.log(getAverage([2,2,2,2]))
  console.log(getAverage([1,2,3,4,5,]))
  console.log(getAverage([1,1,1,1,1,1,1,2]))