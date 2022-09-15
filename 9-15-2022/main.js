/* You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1] */

 //P: (num), numbers only, return an array exclude zero
 //R: Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
 //E: 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 // 1 --> [1] 

 function monkeyCount(n) {
    // create empty array
    let monkeys = [];
    // loop through the numbers all the way to n, exclude zero so start with i = 1
  for(let i = 1; i <= n; i++){
    // push to  array 
    monkeys.push(i)
  }
    return monkeys
  }