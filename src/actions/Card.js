export const GIVE_PLAYER = "GIVE_PLAYER";
export const GIVE_DEALER_HIDDEN = "GIVE_DEALER_HIDDEN";
export const GIVE_DEALER = "GIVE_DEALER";



export const giveCard = (user, card, hidden = false) => {
  if (user === 'player') {
    return {
      type: GIVE_PLAYER,
      payload: { ...card }
    }
  }
  if (user === 'dealer' && hidden) {
    return {
      type: GIVE_DEALER_HIDDEN,
      payload: { ...card, hidden }
    }
  }
  if (user === 'dealer' && !hidden) {
    return {
      type: GIVE_DEALER,
      payload: { ...card }
    }
  }
}

export const ADD_POINTS = "ADD_POINTS";
export const givePoints = (user, points, hidden = false) => (
  {
    type: ADD_POINTS,
    payload: {
      user: user,
      points,
      hidden
    }
  }
)

export const REVEAL_HIDDEN = "REVEAL_HIDDEN";
export const revealHidden = (hiddenCards) => ({
  type: REVEAL_HIDDEN,
  payload: { dealer: hiddenCards }
})