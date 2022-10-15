/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

// convert to camel case, only strings, no funny biz

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  
    //Create empty string to build on
    var myString = '';
    
    //Start a for loop to go through each letter
    for (let i = 0; i < str.length; i++) {
      
      //Get the current letter
      var letter = str.charAt(i);
      
      //Check if the letter is lowercase
      if (letter == '-' || letter == '_'){
        
        //Increment the counter
        i++;
        
        //Make the next letter uppercase and add to the string
        myString += str.charAt(i).toUpperCase();
        
      } else {
        
        //Just add the letter
        myString+= letter;
      }
  
    }
  return myString;
  }