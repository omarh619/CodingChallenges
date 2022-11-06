/* At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

 */

//ages - return new arr of ypungest, oldest and diff of ages

// only nums, no empty arr, no special char

//[82, 15, 6, 38, 35]), [6, 82, 76]);
//[57, 99, 14, 32]), [14, 99, 85]);

function differenceInAges(ages){
    //sort - find the diff of ages - return youngest, oldest , and diff
    let sorted = ages.sort((a,b)=> a-b,0)
    let diff = sorted[sorted.length - 1] - sorted[0]
    console.log(sorted)
      return [sorted[0], sorted[sorted.length - 1], diff]
    }
    