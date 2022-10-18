/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); */ 

//(nums)- strings and numbers, no special !, 

//assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
//assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

function arrOfNumsTotal(nums){
    // make a new arr that turns nums to Numbers
    //after turned to Numbers use reduce method to get the sum of numbers
    return nums.map(x=> Number(x)).reduce((a,b)=> a+b,0)
  }
  console.log(arrOfNumsTotal([9,3,'7','3']))
  console.log(arrOfNumsTotal(['5','0',9,3,2,1,'9',6,7]))
  console.log(arrOfNumsTotal(['3',6,6,0,'5',8,5,'6',2,'0']))