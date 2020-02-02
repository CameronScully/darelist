import {
  ADD_DARE,
  GET_DARES,
  DARES_LOADING,
  DELETE_DARE,
  FILTER_DARES,
  EDIT_DARES
} from '../actions/types.js';

const initialState = {
  dares: [],
  filteredDares: [],
  loading: false,
  editDare: {},
  modal: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_DARE:
      return {
        ...state,
        dares: [action.payload, ...state.dares],
        filteredDares: [action.payload, ...state.filteredDares]
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
        dares: state.dares.filter(dare => dare._id != action.payload),
        filteredDares: state.filteredDares.filter(dare => dare._id != action.payload)
      };
    case FILTER_DARES:
      return {
        ...state,
        filteredDares: state.dares.filter(dare => dare.text.includes(action.payload))
      };
    case EDIT_DARES:
      return {
        ...state,
        editDare: action.payload,
        modal: !state.modal
      };
    default:
      return state;
  }
}
