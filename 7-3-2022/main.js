/* Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```
Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

 */

//P: (obj, feature), two parameters return using template string with 'are' in between params
//R: return a template string containing 2 strings with the word are
//E: (cars, cool) => cars are cool
    //(kids, fun) => kids are fun
    //(dogs, friendly) => 'dogs are friendly'
    const TempString = function (obj,feature){
        // output 2 strings using template string
        return `${obj} are ${feature}`
        // return string with 'are in the middle
    }