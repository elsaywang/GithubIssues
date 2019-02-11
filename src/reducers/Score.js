import { ADD_POINTS } from '../actions/Card';
import { RESET_GAME } from '../actions/Game';
const initial = {
  player: 0,
  dealer: 0
}

const validateMutliValues = (points, currentScore) => {
  if (points.length > 1 && currentScore < 21) {
    const remainingPoints = 21 - currentScore;

    const bestVal = points.filter((val) => {
      return !isNaN(val) && val <= remainingPoints;
    })
    return Math.max(...bestVal)
  } else {
    return Math.min(points);
  }
}
const scoreReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_POINTS:
      const { payload } = action;
      if (payload.user === 'player') {
        if (payload.points.length !== 1) {
          state = {
            ...state,
            player: state.player + validateMutliValues(payload.points, state.player)
          }
        } else {
          state = {
            ...state,
            player: state.player + payload.strength
          }
        }
      } else if (payload.user === 'dealer') {
        if (!payload.hidden) {
          if (payload.points.length !== 1) {
            state = {
              ...state,
              dealer: state.dealer + validateMutliValues(payload.points, state.dealer)
            }
          } else {
            state = {
              ...state,
              dealer: state.dealer + payload.dealer
            }
          }
        }
      }
      break;
    case RESET_GAME:
      console.log('reset Score', state)
      state = {
        ...state,
        player: 0,
        dealer: 0
      }
      break;
    default:
      break
  }
  return state
}
export default scoreReducer;