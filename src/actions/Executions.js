import { givePoints, revealHidden } from './Card';
import { endGameWinsDealer, endGameWinsPlayer, scoreCheck } from './Game';

export const toggleHidden = collection => {
  console.log('collection', collection);
  return dispatch => {
    const hiddenCards = collection.dealer.map(card => {
      console.log('single-card', card);
      if (card.hidden) {
        const points = card.strength;
        dispatch(givePoints('dealer', points));
      }
      return { ...card, hidden: false };
    });

    console.log('hiddenCards', hiddenCards);

    dispatch(revealHidden(hiddenCards));
  };
};

export const watchScore = ({ player, dealer }, final = false) => (
  dispatch => {
    if (player > dealer && !final) {
      if (player === 21) {
        dispatch(endGameWinsPlayer());
      } else if (player > 21) {
        dispatch(endGameWinsDealer());
      } else {
        dispatch(scoreCheck());
      }
    } else if (dealer > player && !final) {
      if (dealer === 21) {
        dispatch(endGameWinsDealer());
      } else if (dealer > 21) {
        dispatch(endGameWinsPlayer());
      } else {
        dispatch(scoreCheck());
      }
    } else if (final) {
      if (player < dealer && dealer < 21) {
        dispatch(endGameWinsDealer());
      } else if (player > dealer && player < 21) {
        dispatch(endGameWinsPlayer());
      }
    }
  }
)