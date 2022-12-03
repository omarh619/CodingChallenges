/* Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!  */

// (str)- return the char reversed without using reverse method

// only str, no nums, no empty strings

// hello => olleh
// my name => eman ym

function revStr(str){
    //split - reduce character + acc
    return str.split('').reduce((a,c)=> c+a)
  }
  console.log(revStr('hello'))
  console.log(revStr('my name'))