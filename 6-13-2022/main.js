/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
 */

//P: (operator, value1, value2)
//R: return result after applying operator
function basicMathOp(operator, value1, value2){
    //write conditionals
    if(operator === '+'){
        return value1 + value2;
      }else if(operator === '-'){
        return value1 - value2;
        }else if(operator === '*'){
        return value1 * value2;
        }else if(operator === '/'){
        return value1 / value2;
        }
    // must return as number not string
}


//E:
basicMathOp('+',1,2)// return 3
basicMathOp('*',3,4)// 12
basicMathOp('/',4,2)// 2