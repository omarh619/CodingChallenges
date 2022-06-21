/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

//P: (str1, str2), only letters
//R: return new sorted string, longest possible without any repeated letters
function longestString(str1, str2){
    //join str1 and str2
    let joinedStr = str1+str2;
    //split string and sort
    let splitAndSort = joinedStr.split('').sort();
    // filter out repeated letters
    let removeDuplicates = splitAndSort.filter((item,pos,self)=>self.indexOf(item)==pos).join('');
    //join string and return
    return removeDuplicates
}

//E:
longestString("xyaabbbccccdefww", "xxxxyyyyabklmopq")// returns "abcdefklmopqwxy"
longestString('aaaabbbb', 'cccddd')// 'abcd'
longestString('bbaaa', 'zzzxxxyy')// 'abxyz'
