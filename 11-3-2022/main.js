/* Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length. */

//(one,two,three)- all same length, no nums, 
// grab first letter of each and combine till no more
//Input: "aa", "bb" , "cc" => Output: "abcabc"

function tripleTrouble(one, two, three){
    // empty str
    let str = ''
    // loop through one str as theyre all same length
    for (let i = 0; i < one.length; i++){
      str += `${one.charAt(i)}${two.charAt(i)}${three.charAt(i)}`
    }
    return str
   }

