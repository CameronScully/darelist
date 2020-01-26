import {
  GO
} from './types';

export const go = page => {
  return {
    type: GO,
    payload: page
  };
};
