/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5 */

//P: time, must be number
//R: return how many litres did he drink in the time he spent cycling...round down
function litresCycling(time){
    //figure litres per hour( time/ 2)
    // round down to integer
    let litresRes = Math.floor(time/2);
    // return result
    return litresRes
}


//E:
litresCycling(5)//return 2
litresCycling(2)// return 1
litresCycling(6.7)// return 3



