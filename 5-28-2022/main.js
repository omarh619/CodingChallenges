/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000 */

//P: (h,m,s) must only be numbers
//R: return number in ms
    //create variablle for ms
    function turnToMilli(h,m,s){
        let aMilli = 0;
        aMilli += h * 3600000;
        aMilli += m * 60000;
        aMilli += s * 1000;
        return aMilli;
    }
    // get total per element in ms
    // return ms



//E:
turnToMilli(1,0,1)//returns 3601000
turnToMilli(0,1,0)//returns 60000
turnToMilli(1,1,1)//returns 3661000
