/* Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
 */

//P: (word), its a string, no special characters, up to 10 characters, return first letter capitalized
//R:return the word capitalized
//E:('hello')=>'Hello'
    //('vIP')=>'VIP'
    //('vIp')=>'VIp'

    function capitalizeWord(word) {
        //variable to hold the rest of the word
        let newWord = word.slice(1,word.length)
        console.log(newWord)
        //uppercase case fir st letter the join the rest of the word
        return `${word[0].toUpperCase()}${newWord}`
        
       
      }