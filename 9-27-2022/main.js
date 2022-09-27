/* Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS. */

//P: string prototype. check if string is all caps
//R: return true if whole string is upper case and false if not
//E: "hello I AM DONALD" -> False
 // "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False

String.prototype.isUpperCase = function() {
    //split string
    let str = this.split('');
    // loop through str
    for(let i = 0; i < str.length; i++){
        // conditional to see if uppercase
      if(str[i] !== str[i].toUpperCase()) {
        return false;
      }
    }
      return true;
    }