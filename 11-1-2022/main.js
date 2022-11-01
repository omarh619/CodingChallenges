/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces. */

//(str)- only letters and spaces, Change case of every character, ie. lower case to upper case, upper case to lower case. Reverse the order of words from the input.

// "Example Input" ==> "iNPUT eXAMPLE"

function revAndChangeCases(str){
    // map and change cases
    // reverse str
    //join
    return str.split(' ').reverse().join(' ').split('').map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
  }
  
  console.log(revAndChangeCases("Example Input"))