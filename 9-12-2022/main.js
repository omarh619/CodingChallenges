/* Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
 */

//P(teams, score), given the teams and the score return the results in a certain string
//R return the results in a string
//E:(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// ['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// ['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores){
    // write conditionals
    // return in string
    if(scores[0] > scores[1]){
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }else if(scores[0] < scores[1]){
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }else{
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
    }