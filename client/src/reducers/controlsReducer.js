import { TOGGLE } from '../actions/types.js';

const initialState = {
  warningIsActive: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case TOGGLE:
      return {
        ...state,
        warningIsActive: !state.warningIsActive
      };
    default:
      return state;
  }
}
