import {
  GET_PLAYERS,
  ADD_PLAYER,
  DELETE_PLAYERS,
  UPDATE_USERNAME,
  DARE_PLAYER,
  RESET_PLAYER,
  DELETE_PLAYER,
  PENALISE_PLAYER
} from './types';

export const getPlayers = () => {
  return {
    type: GET_PLAYERS
  };
};

export const addPlayer = () => {
  return {
    type: ADD_PLAYER
  };
};

export const deletePlayers = () => {
  return {
    type: DELETE_PLAYERS
  };
};

export const updateUsername = (value, id) => {
  return {
    type: UPDATE_USERNAME,
    payload: {value, id}
  };
};

export const darePlayer = (id, dare, penalty) => {
  return {
    type: DARE_PLAYER,
    payload: {id, dare, penalty}
  };
};

export const penalisePlayer = (id, penalty) => {
  return {
    type: PENALISE_PLAYER,
    payload: {id, penalty}
  };
};

export const resetPlayer = (id) => {
  return {
    type: RESET_PLAYER,
    payload: id
  };
};

export const deletePlayer = (id) => {
  return {
    type: DELETE_PLAYER,
    payload: id
  };
};
