/* You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24) */

// (arr)- two nums in arr only occur once the rest occur twice, they can only appear once or twice, no strings, only integers, no negative nums

//repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
//repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
//repeats([5, 10, 19, 13, 10, 13]),24)

function repeats(arr){
    //filter arr to find single values - index of num is last index of num
    //find the sum of single values
    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c) => a + c, 0)
  }
  
  console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]))
  console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]))
  console.log(repeats([5, 10, 19, 13, 10, 13]))
  