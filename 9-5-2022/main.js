/* In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */

//P (array) an array of 'good' and  'bad', no numbers just words
//R: If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
//E: ['bad', 'bad', 'bad']), 'Fail!');
    //['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    //['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!')

    function well(x){
        // variable to keep count
        let count = 0;
        //loop through array to find 'good'
        for(let i = 0; i < x.length; i++){
          if(x[i] === 'good'){
            // if theres the word 'good' add the count
            count += 1;
          }
        
        }
        //conditionals to return correct reply
          if (count > 0 && count < 3){
            return 'Publish!'
          }else if(count >= 3){
            return 'I smell a series!'
          }else{
            return 'Fail!'
            
          }
        
      }
