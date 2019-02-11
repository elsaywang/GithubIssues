import { getSuitStrengthByCode, getSuitShapeByCode } from '../utils/suit';
import { getDecksOfCard, getNewDeck, drawCard } from '../utils/apis';
import { RESET_GAME, CREATE_NEW_DECK } from '../actions/Game';


// const CARDS = ['AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '0S', 'JS', 'QS', 'KS',
//   'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '0D', 'JD', 'QD', 'KD',
//   'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '0C', 'JC', 'QC', 'KC',
//   'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '0H', 'JH', 'QH', 'KH'];

// const defaults = CARDS.map(card => ({
//   code: card, suit: getSuitShapeByCode(card), strength: getSuitStrengthByCode(card),
// }));

const deckReducer = (state=[], { type, payload }) => {
  switch (type) {
    case RESET_GAME:
      state = [];
      break;
    case CREATE_NEW_DECK:
      state = [...payload];
      break;
    default:
      break;
  }
  return state;
}

export default deckReducer;