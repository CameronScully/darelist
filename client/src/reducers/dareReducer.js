import { GET_DARES } from '../actions/types.js';

const initialState = {
  dares: [
    { text: "test dare" }
  ]
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
