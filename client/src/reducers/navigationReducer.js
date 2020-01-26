import { GO } from '../actions/types.js';

const initialState = {
  page: "game"
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GO:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
}
