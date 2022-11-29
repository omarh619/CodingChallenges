/* You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes']) */

//arr of strings, no nums, no special char, all lowercase

//remove all consecutive duplicate letters

//dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//dup(["kelless","keenness"]) = ["keles","kenes"].

function dup(arr){
    //map -> word - split - filter - join
    return arr.map((word)=> word.split('').filter((l, i, a)=> l != a[i-1]).join(''))
    
  }
  
  console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
  console.log(dup(["kelless","keenness"]), ['keles','kenes'])
  console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])