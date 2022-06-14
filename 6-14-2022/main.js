/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
 */

//P: str, string of letters
//R: return the amount of errors/out of total string
function printerError(str){
    //create variable to keep count of errors
    let count = 0;
    //loop through entire str
    for(let i = 0; i < str.length; i++){
    //conditional to count errors
    if(str[i] > 'm'){
        count += 1;
    }   
    }
    //return errors / out of str
    return count + '/' + str.length
}

//E:
printerError('aaammmxxx')//returns 3/9
printerError('badez')// 1/5
printerError('aaabbb')// 0/6

