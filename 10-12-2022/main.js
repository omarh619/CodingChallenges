//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//(num) - print out from 1 to num, if divisible by 3 return 'fizz', divisible by 5 return 'buzz, divisible by both return 'fizzbuzz', nums only, no !, 

// (3)=> [1,2,'Fizz']
// (5)=> [1,2,'Fizz',4,'Buzz']
//(15)=> [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FIZZBUZZ']

function fizzBuzz(num){
    let result = [];
    //create a for loop 
    for (let i = 1; i <= num; i++) {
        if(i % 5 ===0 && i % 3===0){
            result.push('FizzBuzz')
        }else if(i % 5 ===0){
            result.push('Buzz')
        }else if(i % 3===0){
            result.push('Fizz')
        }else{
            result.push(i)
        }
        
    }
    // check first if divisible by 3 and 5
    // then check for  single divisible
    return result
}
console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))