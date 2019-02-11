import { getDecksOfCard, getNewDeckAPI, drawCard } from '../utils/api';
import { getSuitStrengthByCode } from '../utils/suit';
import { getNewDeckFromAPI } from '../utils/fetchUtil';

export const NEW_GAME = 'NEW_GAME';
export const RESET_GAME = 'RESET_GAME';


export const CREATE_NEW_DECK = "CREATE_NEW_DECK";
export const createNewDeck = (cards) => ({
  type: CREATE_NEW_DECK,
  payload: cards
});

export const createDeckCard = () => {
  return async dispatch => {
    try {
      const { deck_id } = await getNewDeckFromAPI();
      const newCardRes = await fetch(drawCard(deck_id, 52));
      const newCardObj = await newCardRes.json();
      const { cards } = newCardObj;

      const cardsPayload = cards.map(({ code, suit }) => ({
        code, suit, strength: getSuitStrengthByCode(code), deckID: deck_id
      }));
      dispatch(createNewDeck(cardsPayload));
    } catch (error) {
      // API call didn't go through. Likely an error in `response.json()`.
      dispatch({
        type: `${CREATE_NEW_DECK}_REJECTED`,
        error: true,
        payload: error,
      });
    }
  }
};

export const newGame = () => (
  {
    type: NEW_GAME,
    payload: {
      inGame: true,
      isHitDisabled: false,
      isStayDisabled: false,
      winner: ''
    }
  }
)

export const resetGame = () => (
  {
    type: RESET_GAME,
    // payload: cards
  }
)

export const endGamePlayload = {
  inGame: false,
  isHitDisabled: true,
  isStayDisabled: true,
}
export const endGamePlayerWinsPayload = {
  ...endGamePlayload,
  winner: 'player'
}
export const endGameDealerWinsPayload = {
  ...endGamePlayload,
  winner: 'dealer'
}

export const GAME_END = 'GAME_END';
export const endGameWinsPlayer = () => ({
  type: GAME_END,
  payload: { ...endGamePlayerWinsPayload }
})
export const endGameWinsDealer = () => ({
  type: GAME_END,
  payload: { ...endGameDealerWinsPayload }
})

export const SCORE_CHECK = "SCORE_CHECK";
export const scoreCheck = () => ({
  type: SCORE_CHECK,
})