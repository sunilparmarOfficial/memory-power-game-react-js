import { combineReducers } from "redux";

import PlayerReducer from "./player/reducer";

const rootReducer = combineReducers({
  player: PlayerReducer,
});

export default rootReducer;