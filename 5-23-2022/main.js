/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */
//P: bing, string
//R: return
//E: 
function removeExclamationMarks(s) {
    // seperate string and remove bing and bring back string together
    // return function
    return s.split('!').join('');
}

removeExclamationMarks('Hello!')// return 'Hello'
removeExclamationMarks('!Hi!')// return 'Hi'
removeExclamationMarks('!!!!!')// return ''