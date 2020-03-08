import axios from 'axios';
import {
  ADD_DARE,
  GET_DARES,
  DARES_LOADING,
  DELETE_DARE,
  FILTER_DARES,
  EDIT_DARES,
  ADD_PENALTY,
  DELETE_PENALTY,
  GET_PENALTIES,
  PENALTIES_LOADING
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

export const addPenalty = penalty => dispatch => {
  axios
    .post('/api/penalties', penalty)
    .then(res =>
      dispatch({
        type: ADD_PENALTY,
        payload: res.data
      })
    )
};

export const getPenalties = () => dispatch => {
  dispatch(setPenaltiesLoading());
  axios
    .get('/api/penalties')
    .then(res =>
      dispatch({
        type: GET_PENALTIES,
        payload: res.data
      })
    )
};

export const deletePenalty = id => dispatch => {
  axios
    .delete(`/api/penalties/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PENALTY,
        payload: id
      })
  )
};

export const editDare = dare => {
  return{
    type: EDIT_DARES,
    payload: dare
  };
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

export const setPenaltiesLoading = () => {
  return {
    type: PENALTIES_LOADING
  };
};

export const deleteDare = id => dispatch => {
  axios
    .delete(`/api/dares/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_DARE,
        payload: id
      })
  )
};

export const filterDares = search => {
  return{
    type: FILTER_DARES,
    payload: search
  };
};
