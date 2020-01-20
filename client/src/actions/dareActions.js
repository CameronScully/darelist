import { GET_DARES, DELETE_DARE, UPDATE_DARE } from './types.js';

export const getDares = () => {
  return {
    type: GET_DARES
  };
}
