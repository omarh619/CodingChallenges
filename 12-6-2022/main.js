/* You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique. */

// (jewels, stones)- case ssensitive, only letters, how many of the stones you have are also jewels

//Input: jewels = "aA", stones = "aAAbbbb" => 3
//Input: jewels = "z", stones = "ZZ" => 0

function findJewels(jewels, stones){
    //loop - stones === jewels ++
  /*   let count = 0;
    for(let i = 0; i < stones.length; i++){
      for(let j = 0; j < jewels.length; j++){
        if(stones[i] === jewels[j]){
          count++;
        }
      }
    }
    return count */
  
    let map = {},
        count  = 0;
  
    for(const jewel of jewels){
      map[jewel] = true;
    }
    for(const stone of stones){
      if(map[stone]){
        count ++;
      }
    }
    return count
  }
  
  console.log(findJewels('aA', 'aAAbbbb'), 3)
  console.log(findJewels('z', 'ZZ'),0)
  