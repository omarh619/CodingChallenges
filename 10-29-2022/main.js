/* Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
 */

//nums only, no strings, no negative nums

//(2,7),6);
//(3,10),9);
//(7,17),14);

function maxMultiple(divisor, bound){
    // bound - (bound%div)
    return bound-bound%divisor
  }