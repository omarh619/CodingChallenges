/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */

//P: (str), made of letters a,b,c..no uppercase or empty strings
//R: switch the letter position of a and b but leave c untouched
//E: 'acb' => 'bca'
    //'aabacbaa'=> 'bbabcabb'
    // 'ccccc'=> 'ccccc'
    function switchAAndB(str){
        //create a variable to hold new string
        let newStr = ''
        // loop the string length
        for (let i = 0; i < str.length; i++){
            if(str[i] === 'a'){
               newStr += 'b';
            }else if (str[i] === 'b'){
                newStr += 'a';
            }else{
                newStr += str[i];
            }
            
        } 
        return newStr
        // find the letter a and replace with b and vice versa
        // leave c alone
        // push to new string
    }