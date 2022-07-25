/* The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.

 */
//P: (num, power), return function that raises the number up to power without using math functions
//R: return a function to that raises the number up to power 
//E:
/* numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000 */

function numberToPower(number, power){
    // create a variable to hold value but starts at 1
    let total = 1;
    // use loop instead of a math function, start i at 1
  for (let i = 1; i <= power; i++) { 
    total = total * number;
  }
  return total;

}