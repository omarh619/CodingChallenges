/* This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
 */

//P: extend the built in array class with different methods, must be numbers
//R: return different methods to a built in class. methods are square(),cube(),average(),sum(),even(),odd()
//E:
/* numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5] */

//create an array prototype for each method
Array.prototype.square = function(){
    // map a square function
    return this.map(n=>n*n)
  };
    Array.prototype.cube = function(){
        // map a cube function
      return this.map(n=>n*n*n)
    };
    Array.prototype.average = function(){
        // the sum / the length of array
      return (this.sum()) / (this.length)
    };
    Array.prototype.sum = function(){
        // reduce for the sum
      return this.reduce((a,b)=>a+b,0)
    };
    Array.prototype.even = function(){
        // filter out the evens
      return this.filter(num=>num%2==0)
    };
    Array.prototype.odd = function(){
        //filter out the odds
      return this.filter(n=>n%2 != 0)
    }
  