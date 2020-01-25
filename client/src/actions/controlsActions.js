import {
  TOGGLE,
  DELETE_PLAYERS,
  ADD_PLAYER,
  DARE_PLAYERS,
  RESET_PLAYERS
} from './types';

export const toggle = () => {
  return {
    type: TOGGLE
  };
};

export const deletePlayers = () => {
  return {
    type: DELETE_PLAYERS
  };
};

export const addPlayer = () => {
  return {
    type: ADD_PLAYER
  };
};

export const darePlayers = () => {
  return {
    type: DARE_PLAYERS
  };
};

export const resetPlayers = () => {
  return {
    type: RESET_PLAYERS
  };
};
