import {
  ADD_DARE,
  GET_DARES,
  DARES_LOADING,
  DELETE_DARE
} from '../actions/types.js';

const initialState = {
  dares: [],
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_DARE:
      return {
        ...state,
        dares: [action.payload, ...state.dares]
      };
    case GET_DARES:
      return {
        ...state,
        dares: action.payload,
        loading: false
      };
    case DARES_LOADING:
      return {
        ...state,
        loading: true
      };
    case DELETE_DARE:
      return {
        ...state,
        dares: state.dares.filter(dare => dare._id != action.payload)
      };
    default:
      return state;
  }
}
