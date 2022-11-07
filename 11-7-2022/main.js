/* An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion') */


//(num, arr)- num - mixed arr has missing num frm num arr => return missing num from mixed arr. if no num is missin;g return o

//findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
//findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
//findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion') 

function findDeletedNumber (numArr, mixArr){
    /*  return numArr.filter(n=> mixArr.indexOf(n) === -1)[0] || 0
    */
    let sumOfNumArr = numArr.reduce((a,c)=> a+c,0);
     let sumOfMixArr = mixArr.reduce((a,c)=>a+c,0);
     return sumOfNumArr - sumOfMixArr
   }
   
   console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]))
   console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]))
   console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]))