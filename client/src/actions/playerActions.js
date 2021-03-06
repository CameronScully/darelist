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

export const darePlayer = (id, dare) => {
  return {
    type: DARE_PLAYER,
    payload: {id, dare}
  };
};

export const penalisePlayer = (playerID, dareID, penalty) => {
  return {
    type: PENALISE_PLAYER,
    payload: {playerID, dareID, penalty}
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
