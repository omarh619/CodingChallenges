/* Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a" */
//P: array
//R: return to a string
function turnToStr(array){
    //turn array to a string
    //return it
    return String(array)
    // array.toString() also works
}

//E: 
turnToStr(['h','i'])//return 'h,i'
turnToStr(['h','e','l','p'])// 'h,e,l,p'
turnToStr(['o','k'])// 'o,k'