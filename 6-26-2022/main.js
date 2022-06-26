/* My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.
More examples:
movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)
 */
    function moviesSystem(card, ticket, perc){
        //Create variables for systems and trips
        let systemA = 0,
            systemB = card,
            trips= 0;
            // do  loop that while systemB is greater or equal to systemA we go up 1 on trips
            
            while(Math.ceil(systemB) >= Math.ceil(systemA)){
                trips++;
                // system b is ticket times the discount and trips ( use math.pow)
                systemB += ticket * Math.pow(perc, trips);
                systemA += ticket;
            }
            return trips
    }

    //P: card, ticket , perc.....system a pays 15 per ticket, system b buys 500 card but pays perc per ticket(15* perc)....find out how many trips it takes for system b to be cheaper than system a
    //R: return how many trips it takes for system b to be cheaper than system a
    //E:(500, 15, 0.9) => 43
