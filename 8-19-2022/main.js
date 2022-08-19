/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

 */

//P: (n), array of integers only, take a number and return an array  from number to 1
//R: return an array from n to 1 where n>0
//E: (5)=> [5,4,3,2,1]
    //(3)=>[3,2,1]
    //(1)=>[1]

    const reverseSeq = n => {
        //create variable to hold array
        let arr = []
        // loop through n to 1
        for(let i = n; i > 0; i--){
            // push i to array
          arr.push(i);
        }
        // return array
        return arr;
      };