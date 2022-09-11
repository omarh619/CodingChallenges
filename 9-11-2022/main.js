/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

//P: (arr), find the char codes for each vowel, check for the numbers if included in array, if they are change the array value to a string of that vowel
//R: return the resulting array 
//E: [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
// [101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);

function isVow(arr){
    // loop through array to check for char codes of vowels
    for(var i=0;i<arr.length;i++){
        // find char codes of each vowel
        //write conditional to replace each char code to the string vowel
    if(arr[i]===97){arr[i]="a";}
    if(arr[i]===101){arr[i]="e";}
    if(arr[i]===105){arr[i]="i";}
    if(arr[i]===111){arr[i]="o";}
    if(arr[i]===117){arr[i]="u";}
    }
    return arr 
    }