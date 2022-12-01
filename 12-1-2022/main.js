/* Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz” */


//(num)- nums only, no strings , no special !,

// when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”

//(5)=> [1,fizz,buzz,fizz,5]
//(6)=> [1,fizz,buzz,fizz,5,'fizzbuzz']

function fizzBuzz(num){
    let arr = []
    //loop - conditionals fizzbuzz first
    for( let i = 1; i <= num; i++){
      if(i % 2 === 0 && i % 3  === 0){
        arr.push('fizzbuzz')
      }else if(i % 2 === 0){
        arr.push('fizz')
      }else if(i % 3  === 0){
        arr.push('buzz')
      }else{
        arr.push(i)
      }
    }
    return arr
    
  }
  
  console.log(fizzBuzz(5))
  console.log(fizzBuzz(6))