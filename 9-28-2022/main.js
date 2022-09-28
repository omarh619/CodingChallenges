/* DESCRIPTION:
The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you! */

//P: (amount), add trailing zeros if missing, add dollar sign if missing
//R: return amount in proper dollars and cents
//E: (3)=> $3.00
    //(3.1)=> $3.10

    function formatMoney(amount){
        // to fixed to make amount proper
        return `$${amount.toFixed(2)}`
      }
      