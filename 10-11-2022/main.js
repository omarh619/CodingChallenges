
// create a function take in a word, return if word is palindrome(spelled same forward and backwards)

//(word), str, no empty string, no !, no nums, no caps, 1 word

//return if the word is a palindrome (true || false)

// (yay)=> true
// (racecar)=> true
// (john)=> false

/* function isPalindrome(word){
  //word => reverse that word - split reverse join
  let revWord = word.split('').reverse().join('');
  // revWord === word 
  if(revWord === word){
    return true
  }else{
    return false
  }
} */
const isPalindrome = word => word === word.split('').reverse().join('')

console.log(isPalindrome('yay'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('john'))