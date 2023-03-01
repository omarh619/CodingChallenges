//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//(num) if even *8 odd *9
// return total
//(4)=> 32
//(5)=> 45


function simpleMultiplication(number) {
    //conditionals for even and odd
    //return total
    if(number % 2 === 0){
     return(number * 8)
    }else{
      return(number * 9)
    }
}
