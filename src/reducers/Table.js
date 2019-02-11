import { GIVE_PLAYER, GIVE_DEALER_HIDDEN, GIVE_DEALER, REVEAL_HIDDEN } from '../actions/Card';
import { RESET_GAME } from '../actions/Game';

const initial = {
  player: [],
  dealer: []
}
const tableReducer = (state = initial, action) => {
  //console.log('action',action);
  let { dealer, player } = state;
  let { payload } = action;
  switch (action.type) {
    case GIVE_PLAYER:
      state = {
        ...state,
        player: [
          ...player,
          payload
        ]
      }
      break;
    case GIVE_DEALER:
      state = {
        ...state,
        dealer: [
          ...dealer,
          payload
        ]
      }
      break;
    case GIVE_DEALER_HIDDEN:
      let { hidden } = action.payload;
      console.log(hidden);
      state = {
        ...state,
        dealer: [
          ...dealer,
          payload
        ]
      }
      break;
    case RESET_GAME:
      //console.log('RESET Table',state);
      state = {
        ...state,
        //undefined,
        player: [],
        dealer: []
      }
      break;
    case REVEAL_HIDDEN:
      state = {
        ...state,
        ...payload
      }
      break;
    default:
      break;
  }
  //console.log('next',state);
  return state;
}

export default tableReducer;