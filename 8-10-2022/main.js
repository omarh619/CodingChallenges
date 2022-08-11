/* DESCRIPTION:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once. */

//P: (number), must be a number, if number less than 0 return 0, if multiple of 3 and 5 count only once
//R: return the sum of all multiple numbers of 3 and 5 of the given number
//E: (10)=> (23)
    // (3)=>(3)
    // (-1)=>(0)


function solution(number){
    //create variable to hold sum of multiples
    var sum = 0;
    // loop through all the numbers
    for(var i = 1;i< number; i++){
        // conditional of negative numbers
        if(number < 0){
            return 0
        }
        // sum of all numbers that are multioles of 3 and 5
     else if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }