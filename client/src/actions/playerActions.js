import {
  GET_PLAYERS,
  ADD_PLAYER,
  DELETE_PLAYERS,
  UPDATE_USERNAME
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
