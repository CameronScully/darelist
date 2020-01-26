import axios from 'axios';
import {
  ADD_DARE,
  GET_DARES,
  DARES_LOADING,
  DELETE_DARE
} from './types';

export const addDare = dare => dispatch => {
  axios
    .post('/api/dares', dare)
    .then(res =>
      dispatch({
        type: ADD_DARE,
        payload: res.data
      })
    )
};

export const getDares = () => dispatch => {
  dispatch(setDaresLoading());
  axios
    .get('/api/dares')
    .then(res =>
      dispatch({
        type: GET_DARES,
        payload: res.data
      })
    )
};

export const setDaresLoading = () => {
  return {
    type: DARES_LOADING
  };
};

export const deleteDare = id => dispatch => {
  axios.delete(`/api/dares/${id}`).then(res =>
    dispatch({
      type: DELETE_DARE,
      payload: id
    })
  )
};
