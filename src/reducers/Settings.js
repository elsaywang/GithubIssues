import { NEW_GAME, GAME_END } from '../actions/Game';

const initial = {
  inGame: false,
  isHitDisabled: true,
  isStayDisabled: true,
  winner: '',
};

const settingsReducer = (state = initial, action) => {
  const { payload } = action;
  switch (action.type) {
    case NEW_GAME:
      state = {
        ...state,
        ...payload
      }
      break;
    case GAME_END:
      state = {
        ...state,
        ...payload
      }
      break;
    default:
      break;
  }
  return state;
}

export default settingsReducer;