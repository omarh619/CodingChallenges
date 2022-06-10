/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */

//P: str, string of lowercase and uppercase
//R: return if isogram return true or else false
function isIsogram(str){
    // create variable to lowercase string
    str = str.toLowerCase();
    // split the str
    let newArr = str.split('').filter((x,pos,arr)=>arr.indexOf(x)== pos).length == str.length;
    // filter each letter to see if repeated
    return newArr
}

//E:
isIsogram('aba')// false
isIsogram('Horse')//true
isIsogram('Gael')//true