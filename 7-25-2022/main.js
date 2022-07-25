/* Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
 */

//P: (arr, n) you get an array and a number, parameter n is 1 by default.
//R: return the first n elements of the sequence.
//E:first(arr, 2) //=> ['a', 'b']
   // first(arr, 3) //=> ['a', 'b', 'c'];
   // first(arr, 0) //=> [];

   function first(arr,n = 1){
    // n =1 by default
    // use slice to cut n elements
        return arr.slice(0,n)
   }