/* Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars". */

//P: param, its a string that outputs a return value, case sensitive
//R: return a value from the string
function getDrinkByProfession(param){
    //create variable for case sensitive string
    param = param.toLowerCase();
    // write conditionals for each input
    if(param === 'jabroni'){
        return 'Patron Tequila'
      }else if(param === 'school counselor'){
        return 'Anything with Alcohol'
      }else if(param === 'programmer'){
        return 'Hipster Craft Beer'
      }else if(param === 'bike gang member'){
        return 'Moonshine'
      }else if(param === 'politician'){
        return 'Your tax dollars'
      }else if(param === 'rapper'){
        return 'Cristal'
      }else{
        return 'Beer'
      }
    
}
//E:
getDrinkByProfession('jabroni')//returns 'patron tequila'
getDrinkByProfession('rapper')// 'cristal'
getDrinkByProfession('Oliver')// 'beer'
