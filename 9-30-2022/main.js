// arr of nums, target num, return indices of nums that add up to target



//arr of nums - not empty, no !, only nums, whole nums only, positive nums, at least 2 nums in arr
// return indices of the nums that add up to target

//(arr, target) => [1,2,3,4,5], 9 => 3,4
//[5,6,9], 11 => [0,1]
//[22,7,100,5], 12 => [1,3]

function indicesofTarget(arr, target){
    //outside loop grabs a num
    for (let i = 0; i < arr.length; i++) {
      // comparing outside nums to internal nums
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] + arr[k] === target && i !== k){
          return [i,k]
        }
      }
    }
  }
  console.log(indicesofTarget([1,2,3,4,5], 9))
  console.log(indicesofTarget([5,6,9], 11))
  console.log(indicesofTarget([22,7,100,5], 12))