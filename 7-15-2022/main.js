/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

 */

//P: (letter) given the letter return its position in the alphabet
//R: return the position in the alphabet given a letter
//E:
    // 'a'=> "Position of alphabet: 1"
    // 'z' => "Position of alphabet: 26"
    // 'b' => "Position of alphabet: 2"

    function position(letter){
        // create variable to hold alphabet
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        // find the position of a letter using indexof + 1
        let results = alphabet.indexOf(letter) + 1
        //return results
        return `Position of alphabet: ${results}`
    }