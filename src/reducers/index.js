import { combineReducers } from "redux";

import deckReducer from "./Deck";
import tableReducer from "./Table";
import scoreReducer from "./Score";
import settingsReducer from "./Settings";

export default combineReducers({
  settings: settingsReducer,
  deck: deckReducer,
  score: scoreReducer,
  table: tableReducer
});