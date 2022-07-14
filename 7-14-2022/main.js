/* Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

 */
//P: (array) return the array reversed without using built in functions, can be numbers strings or booleans
//R: return the array reversed
//E: [1,2,3]=>[3,2,1]
    //['yes', true]=> [true,'yes']
    //['1','yes','no'] => ['no','yes',1]

    function reverseArr(array){
        //creat new array
        // input array to new array starting from end
        let newArr = array.map((el, index)=> array[array.length - 1 - index]);
        //return results
        return newArr
    }