/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

//(str)- make a new string, if char appears once replace with "(" if more than once ")", all char in play, ignore caps

//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 

function specialCharStr(str){
    // split and map to create new string
    // indexOf to see if its lastIndexOf
    // conditionals
    let newStr = str.toLowerCase()
    return newStr.split('').map(x=>newStr.indexOf(x) === newStr.lastIndexOf(x)? "(": ")").join('')
    console.log(newStr)
  }
  
  console.log(specialCharStr("recede" ))
  console.log(specialCharStr("Success"))
  console.log(specialCharStr("(( @" ))