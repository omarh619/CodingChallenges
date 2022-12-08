/* Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
}); */

//(str)- case sensitive, only strings, no nums

//("Hello World!"), "l");

function appearsMost(str){
    //create variables
    let count = 0,
      charMap = {},
      maxChar = null;
      //loops
    
    for (const char of str){
      charMap[char] = charMap[char] + 1 || 1
      }
    for(const char in charMap){
      if(charMap[char] > count){
        count = charMap[char]
        maxChar = char
      }
    }
    return maxChar
  }
  
  console.log(appearsMost('Hello World!'), 'l')