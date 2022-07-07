/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once. */

//P (number), list all the numbers below the parameter that are multiples of 3 and 5. find the sum , if number is negative return 0 and if number is multipole of 3 and 5 only count in once
//R: return the sum of all numbers below the parameter that are multiples of 3 and 5
//E: (10)=> 23
    //(5)=> 8
    //(0)=> 0
    function multiplesOfThreeAndFive(number){
        // create a variable to hold the sum of numbers
        let finalSum = 0;
  
        for (let i = 0; i < number; i++){
           if(i%5===0 || i%3===0){
            finalSum += i;
          }
          
        }
         return finalSum
       }
        // loop the numbers and find the multiples and add to sum
        //return sum
    