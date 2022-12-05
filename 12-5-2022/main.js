/* DESCRIPTION:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

//str - str only, no nums, 

//("aba"), { a: 2, b: 1 }); 
//(""), {});

function countStr(str){
    let count = {};
   
   str.split('').forEach(s =>
      count[s] ? count[s]++ : count[s] = 1);
   return count;
 }
 
 console.log(countStr('aba'))
 console.log(countStr(''))
 