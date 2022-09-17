/* Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
 */

//P: (numbers, divisors) must be numbers only
//R: returns all numbers which are divisible by the given divisor
//E: [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor){
    // create new array to return results
    let divisible = [];
    // loop through the array length
    for(let i = 0; i <numbers.length; i++){
        // conditional to check if number is divisible
  if(numbers[i] % divisor === 0 ){
    divisible.push(numbers[i])
  }
   
  }
  // return results
    return divisible 
    }