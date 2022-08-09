/* Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

 */

//P: (a,b) If either of the characters is not a letter, return -1, If both characters are the same case, return 1, If both characters are letters, but not the same case, return 0
//R:  Write a function that will check if two given characters are the same case
//E:'a' and 'g' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0

function sameCase(a, b){
    //write conditional to return -1
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
       // else if for 1
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
         // else to return 0
     }else{
       return 0
     }
   }