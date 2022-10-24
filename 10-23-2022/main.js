/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

 */

// string only, no nums, no special char, no empty str

// check if string contains all the letters of alphabet

// return boolean

function isPangram(string){
    //create a variable containing alphabet -> split
    let alph = 'abcdefghijklmnopqrstuvwxyz';
     alph = alph.split('')
    //lower case the string
    string = string.toLowerCase()
      //loop the alph length => check if string index of alph < 0 for false
      for(let i = 0; i < alph.length; i++){
       if(string.indexOf(alph[i]) < 0){
         return false
       }
        
    }
      return true
      }