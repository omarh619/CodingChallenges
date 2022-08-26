/* You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54' */

//P: (arr), an array with 2 strings, only numbers in string, multiply the 2 strings and return total as a string
//R: return the total as a string
//E: ['9','2']=> '18'

function arrMultiply(arr){
    // turn string into a number
    // multiply the 2 numbers
    let multi = Number(arr[0]*arr[1]);
      console.log(multi)
      //return total as a string
      return String(multi)
    }
