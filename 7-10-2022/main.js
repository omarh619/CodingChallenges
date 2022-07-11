/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) */

//P: (a,b), integers can be positive or negative, find the sum of all integers between a and b including them and return it
//R: if a and b are equal return either, find the sum of all the integers between and including them and return it
//E:(1, 1) --> 1 (1 since both are same)
//(-1, 0) --> -1 (-1 + 0 = -1)
//(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) 

function getSum(a,b){
    // condtionals if a and b are equal
    // find the sumof all integers between them and return it
    if(a===b){
        return a;
      }else{
        return  (a + b) * (Math.abs(a - b) + 1) /2 
     }
}