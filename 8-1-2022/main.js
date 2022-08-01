/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
 */

//P: (string), all polish letters, no numbers , change the letters with diacritics
//R: return the string without the polish letters
//E: "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function polishLetters(string){
    // create a variable that splits the string 
    let newStr = string.split('')
    // loop the new string
    for(let i = 0; i < newStr.length; i++){
        //create a switch statement to replace polish letters
      switch(newStr[i]){
          case 'ą' : newStr[i] = 'a'
          break;
          case 'ć' : newStr[i] = 'c'
          break;
          case 'ę' : newStr[i] = 'e'
          break;
          case 'ł' : newStr[i] = 'l'
          break;
           case 'ń' : newStr[i] = 'n'
          break;
          case 'ó' : newStr[i] = 'o'
          break;
          case 'ś' : newStr[i] = 's'
          break;
           case 'ź' : newStr[i] = 'z'
          break;
          case 'ż' : newStr[i] = 'z'
          break;
         default: newStr[i]
          
      }
      
    }
    // when returning new string join() the string to put it together again
      return newStr.join('')
}