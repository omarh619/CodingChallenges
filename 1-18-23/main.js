/* Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion. */

//(n)-> multiply from n to 1 , if zero return 1

// return total

// (5)-> 120

function factorial(n){
    //use recursion
    // conditionals
    if(n < 2){
      return 1
    }
    return n * factorial(n-1)
  }
  
  console.log(factorial(5))
  console.log(factorial(0))
  console.log(factorial(10))