/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
 */
//P: (card), card ca be any suit, return suit in lowercase
//R: return the suit of the card in lowercase
//E:
/* ('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' */

function defineSuit(card) {
    // write conditionals
    // use includes()for each suit
    // return suit in lowercase
    if(card.includes('♣')){
      return 'clubs'
    }else if(card.includes('♦')){
      return 'diamonds'
    }else if(card.includes('♥')){
      return 'hearts'
    }else if(card.includes('♠')){
      return 'spades'
    }
  }