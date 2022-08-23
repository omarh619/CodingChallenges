//P: array, you have an array of names and letters, return the array with the amount of duplicates in array
//R: return the array with the amount of duplicates in array
//E: ['j','j','a'] => [j:2, a:1 ]


function count(array){
    //create variable to hold object
    var counter = {};
    //loop through array
    for (let i=0; i<array.length; ++i)
    {
        //conditionals to determine if any duplicates in array
      if (counter[array[i]] == undefined)
        counter[array[i]] = 1;
      else
        counter[array[i]] ++;
    }
    // return counter
    return counter;
  }