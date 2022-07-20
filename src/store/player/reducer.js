import {
  GET_DATA,
  SET_DATA,
  RESTART_GAME
} from "./actionType";

const initialState = {
  level: 1,
};

const PlayerReducer = (state = initialState, action) => {
  console.log('action =>',action)
  switch (action.type) {
    case GET_DATA:
      state = { ...state };
      break;
    case SET_DATA:
      state = {
        ...state,
        level: action.payload.result === 1 ? state.level + 1 : 1,
      };
      break;
    case RESTART_GAME:
      state = initialState;
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PlayerReducer;