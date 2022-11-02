/* Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'), ['take', 'me', 'semynak', 'to'] */ 

//str - no empty str, no nums, no special char, sort alphabetically by final char of each word

//last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
//last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
//last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

function last(str){
    // split str into each word
    // sort
    return str.split(' ').sort((a,b)=> a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1), 0)
  }
  
  console.log(last('man i need a taxi up to ubud'))
  console.log(last('what time are we climbing up the volcano'))
  console.log(last('take me to semynak'))