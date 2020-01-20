import { GET_DARES, DELETE_DARE, UPDATE_DARE } from '../actions/types.js';

const initialState = {
  dares: [{
    text: "do a backflip"
  }],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_DARES:
      return {
        ...state
      };
      default:
        return state;
  }
}
