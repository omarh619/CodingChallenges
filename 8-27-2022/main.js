/* Challenge:

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels. */

//P: (str), swap cases for the vowels, vowels are aeiou
//R: given a string, return a copy of the string with the vowels case swapped
//E: 'C is alive!'=> 'C Is AlIvE'
    //'Hello'=> 'HEllO'
    //'HELLO'=> 'HeLLo'

    function swapVowelCase(str) {
        //split string
        let splitStr = str.split('');
        //create variable to hold new string
        const swappedArr = [];
        //change lowercase vowels to uppercase
        splitStr.forEach((letter) => {
          if (letter.includes("a") || letter.includes("e") || letter.includes("i") || letter.includes("o") || letter.includes("u")) {
              letter = letter.toUpperCase();
              // change uppercase vowels to lowercase
              } else if (letter.includes("A") || letter.includes("E") || letter.includes("I") || letter.includes("O") || letter.includes("U")) {
              letter = letter.toLowerCase();
          }
          // push new string to an empty array
          swappedArr.push(letter);
        })
        // join the string
        return swappedArr.join('');
      }